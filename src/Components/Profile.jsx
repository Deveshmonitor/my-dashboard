import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Devesh Sen",
    email: "deveshsen512@gmail.com",
    password: "",
    profileImage: "../../public/imgs/images.jpeg",
  });

  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
    // Logic to handle form submission, like updating the profile
  };

  return (
    <div className="w-full p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Profile</h2>

      <div className="flex items-center space-x-6 mb-6">
        <div className="w-24 h-24">
          <img
            src={profile.profileImage}
            alt="Profile"
            className="rounded-full w-full h-full object-cover"
          />
        </div>
        {!editMode ? (
          <div>
            <h3 className="text-xl font-semibold">{profile.name}</h3>
            <p className="text-gray-600">{profile.email}</p>
          </div>
        ) : (
          <input
            type="file"
            name="profileImage"
            className="border rounded px-2 py-1"
            onChange={(e) => {
              const file = URL.createObjectURL(e.target.files[0]);
              setProfile((prevState) => ({
                ...prevState,
                profileImage: file,
              }));
            }}
          />
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          {!editMode ? (
            <p>{profile.name}</p>
          ) : (
            <input
              type="text"
              id="name"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          {!editMode ? (
            <p>{profile.email}</p>
          ) : (
            <input
              type="email"
              id="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          )}
        </div>

        {editMode && (
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={profile.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        )}

        <div className="flex items-center justify-between">
          {!editMode ? (
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={() => setEditMode(true)}
            >
              Edit Profile
            </button>
          ) : (
            <>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Save Changes
              </button>
              <button
                type="button"
                className="ml-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                onClick={() => setEditMode(false)}
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default Profile;
