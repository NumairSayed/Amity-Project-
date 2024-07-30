import React from 'react';

function Input({
    _id,
  name,
  setName,
  email,
  setEmail,
  age,
  setAge,
  gender,
  setGender,
  height,
  setHeight,
  weight,
  setWeight,
  goals,
  setGoals,
  allergies,
  setAllergies,
  isDiabetic,
  setIsDiabetic,
  isHighBP,
  setIsHighBP,
  isPregnant,
  setIsPregnant,
  isAsthmatic,
  setIsAsthmatic,
}) {

    const handleSubmission = async (e) => {
e.preventDefault()
        try {
            const response = await fetch(`http://localhost:8000/api/user/user/${_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    {
                        name: name,
                        email: email,
                        age: age,
                        gender: gender,
                        height: height,
                        weight: weight,
                        goals: goals,
                        allergies: allergies,
                        isDiabetic: isDiabetic,
                        isHighBP: isHighBP,
                        isPregnant: isPregnant,
                        isAsthmatic: isAsthmatic
                        
                    }
                ),
            });
            const data = await response.json();
            if (response.status === 200) {
                alert('User updated successfully')
                window.location.href = '/'
            }
            console.log(data); // Handle response from the API
        }
        catch (error) {
            console.error('Error:', error);
        }
    }

  return (
    <section className="py-8 mx-10">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4 mb-8">
          {/* Personal info */}
          <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
            <div className="mt-8">
              <h3 className="text-2xl font-bold tracking-wide text-white mb-1">
                Personal info
              </h3>
              <p className="text-xs text-gray-300">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div className="w-full lg:w-2/3 px-4">
            <div className="px-8 md:px-16 pt-16 pb-8 bg-gray-500 rounded-xl">
              <div className="max-w-xl mx-auto">
                <form onSubmit={
                    
                        handleSubmission
                    
                } action="">
                  <div className="flex flex-wrap -mx-4 -mb-10">
                    {/* Name */}
                    <div className="w-full px-4 mb-10">
                      <div className="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
                        <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">
                          First Name
                        </span>
                        <input
                          className="block w-full outline-none bg-transparent text-gray-50 placeholder-gray-50 font-semibold"
                          id="formInput2-1"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    {/* Email */}
                    <div className="w-full md:w-1/2 px-4 mb-10">
                      <div className="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
                        <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">
                          Email
                        </span>
                        <input
                          className="block w-full outline-none bg-transparent text-gray-50 placeholder-gray-50 font-semibold"
                          id="formInput2-3"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    {/* Age */}
                    <div className="w-full md:w-1/2 px-4 mb-10">
                      <div className="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
                        <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">
                          Age
                        </span>
                        <input
                          className="block w-full outline-none bg-transparent text-gray-50 placeholder-gray-50 font-semibold"
                          id="formInput2-7"
                          type="text"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                        />
                      </div>
                    </div>
                    {/* Gender */}
                    <div className="w-full md:w-1/2 px-4 mb-10">
                      <div className="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
                        <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">
                          Gender
                        </span>
                        <input
                          className="block w-full outline-none bg-transparent text-gray-50 placeholder-gray-50 font-semibold"
                          id="formInput2-8"
                          type="text"
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                        />
                      </div>
                    </div>
                    {/* Height */}
                    <div className="w-full md:w-1/2 px-4 mb-10">
                      <div className="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
                        <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">
                          Height
                        </span>
                        <input
                          className="block w-full outline-none bg-transparent text-gray-50 placeholder-gray-50 font-semibold"
                          id="formInput2-7"
                          type="text"
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                        />
                      </div>
                    </div>
                    {/* Weight */}
                    <div className="w-full md:w-1/2 px-4 mb-10">
                      <div className="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
                        <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">
                          Weight
                        </span>
                        <input
                          className="block w-full outline-none bg-transparent text-gray-50 placeholder-gray-50 font-semibold"
                          id="formInput2-8"
                          type="text"
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                        />
                      </div>
                    </div>
                    {/* Goals */}
                    <div className="w-full px-4 mb-10">
                      <div className="relative w-full py-4 px-3 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
                        <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">
                          Goals
                        </span>
                        <textarea
                          className="block w-full h-64 outline-none bg-transparent text-gray-50 placeholder-gray-50 font-semibold resize-none"
                          id="formInput2-5"
                          name=""
                          cols="30"
                          rows="10"
                          value={goals}
                          onChange={(e) => setGoals(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                    {/* Allergies */}
                    <div className="w-full px-4 mb-10">
                      <div className="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
                        <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">
                          Allergies
                        </span>
                        <input
                          className="block w-full outline-none bg-transparent text-gray-50 placeholder-gray-50 font-semibold"
                          id="formInput2-11"
                          type="text"
                          value={allergies}
                          onChange={(e) => setAllergies(e.target.value)}
                        />
                      </div>
                    </div>
                    {/* Is Diabetic */}
                    <div className="w-1/4 px-4 mb-10">
                      <div className="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
                        <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">
                          Is Diabetic
                        </span>
                        <input
                          type="checkbox"
                          className="toggle toggle-success"
                          checked={isDiabetic}
                          onChange={(e) => setIsDiabetic(!isDiabetic)}
                        />
                      </div>
                    </div>
                    {/* Is High BP Patient */}
                    <div className="w-1/4 px-4 mb-10">
                      <div className="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
                        <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">
                          Is High BP Patient
                        </span>
                        <input
                          type="checkbox"
                          className="toggle toggle-success"
                          checked={isHighBP}
                          onChange={(e) => setIsHighBP(!isHighBP)}
                        />
                      </div>
                    </div>
                    {/* Is Pregnant */}
                    <div className="w-1/4 px-4 mb-10">
                      <div className="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
                        <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">
                          Is Pregnant
                        </span>
                        <input
                          type="checkbox"
                          className="toggle toggle-success"
                          checked={isPregnant}
                          onChange={(e) => setIsPregnant(!isPregnant)}
                        />
                      </div>
                    </div>
                    {/* Is Asthmatic */}
                    <div className="w-1/4 px-4 mb-10">
                      <div className="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
                        <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">
                          Is Asthmatic
                        </span>
                        <input
                          type="checkbox"
                          className="toggle toggle-success"
                          checked={isAsthmatic}
                          onChange={(e) => setIsAsthmatic(!isAsthmatic)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-right">
                    <button className="inline-block py-2 px-4 mb-2 text-xs text-center font-semibold leading-6 text-blue-50 bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-200" type="submit">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Input;
