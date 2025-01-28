import picture from "../assets/profile.jpg"


const PersonalInfo = () => {
  return (
    <section className="font-semibold">
      <div className="mb-3">
        <img src={picture} alt="Profile" className="rounded-full border border-indigo-100/60 shadow" />
      </div>
      <div className="px-2 text-lg font-bold">
        <h4>Bapes Yop Christian Oscar</h4>
        <p>Développeur Web Full stack</p>

        <ul className="font-medium text-base">
          <li>Email: christianbapes@gmail.com</li>
          <li>Telephone: +23769472335</li>
          <li>GitHub: <a href="https://github.com/DarkChris01" target="_blank">christian</a></li>
        </ul>
      </div>
    </section>
  );
};

export default PersonalInfo