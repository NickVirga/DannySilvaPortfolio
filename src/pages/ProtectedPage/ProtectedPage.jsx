import "./ProtectedPage.sass";

function ProtectedPage() {
  return (
    <main>
      <section className="about">
      <div className="about__img-container">
        <img className="about__profile-pic" src={"/protected/images/tinfoiloffice.jpg"} alt="protected image"></img>
      </div>
      <div className="about__content">
        <h2 className="about__title">PROTECTED</h2>
        <p className="about__bio">
          This is a protected page
        </p>
      </div>
      </section>
    </main>
  );
}

export default ProtectedPage;
