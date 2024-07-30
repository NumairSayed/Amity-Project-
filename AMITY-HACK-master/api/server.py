from flask import Flask, request, jsonify
from dotenv import load_dotenv
from flask_cors import CORS, cross_origin
import os
import google.generativeai as genai
from PIL import Image
import io

load_dotenv() # Load all the environment variables

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

def get_gemini_repsonse(input, image, prompt): 
    model = genai.GenerativeModel('gemini-pro-vision')
    response = model.generate_content([input, image[0], prompt])
    return response.text

prompt1="""
        You are an expert in nutritionist where you need to see the food items from the image
                       and calculate the total calories, also provide the details of every food items with calories intake
                       is below format
                       
                       1. Item 1 - no of calories 
                       2. Item 2 - no of calories
                       ----
                       ----
                    finally u can also mention that whether the food is healthy or not also mention the percentage split of the ratio of carbohydrates, fats, fibre, sugar and other important things required in our diet
        
        """


def input_image_setup(uploaded_file):
    if uploaded_file is not None and uploaded_file.read():
        # Convert the uploaded file to a Pillow Image object
        image = Image.open(uploaded_file)
        
        # Save the image to a BytesIO object
        image_bytes_io = io.BytesIO()
        image.save(image_bytes_io, format=image.format)
        image_bytes_io.seek(0) # Reset the file pointer to the beginning
        
        image_parts = [
            {
                "mime_type": uploaded_file.mimetype,
                "data": image_bytes_io.getvalue() # Get the bytes data from the BytesIO object
            }
        ]
        return image_parts
    else:
        raise ValueError("No file uploaded or file is empty")


@app.route('/api/nutritionist', methods=['POST', 'GET'])
@cross_origin()
def nutritionist_api():
    if request.method == 'POST':
        if 'image' not in request.files or 'prompt' not in request.form:
            return jsonify({"error": "Missing 'image' or 'prompt' in the request"}), 400

        uploaded_file = request.files['image']
        
        input_prompt = request.form['prompt']
        input_prompt += prompt1 + input_prompt

        try:
            image_data = input_image_setup(uploaded_file)
            response = get_gemini_repsonse(input_prompt, image_data, input_prompt)
            return jsonify({"response": response}), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 500
    else:
        return jsonify({"message": "GET request received. Please make a POST request."}), 200

if __name__ == '__main__':
    app.run(debug=True)