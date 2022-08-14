import "./Mainpage.css";
// import './downloadpage.css';
import "./App.css";
import "./Home.css";
import "./Signup.css";
import "./Login.css";

import HomeImg1 from "./img/home-img-1.jpeg";
import HomeImg2 from "./img/home-img-2.jpeg";
import HomeImg3 from "./img/home-img-3.jpeg";
import HomeImg4 from "./img/home-img-4.jpeg";
import animeImg1 from "./img/anime-img-1.jpg";
import animeImg2 from "./img/anime-img-2.jpg";
import animeImg3 from "./img/anime-img-3.jpg";
import animeImg4 from "./img/anime-img-4.jpg";
import animeImg5 from "./img/anime-img-5.jpg";
import animeImg6 from "./img/anime-img-6.jpg";
import animeImg7 from "./img/anime-img-7.jpg";
import animeImg8 from "./img/anime-img-8.jpg";
import animeImg9 from "./img/anime-img-9.jpg";
import animeImg10 from "./img/anime-img-10.jpg";
import animeImg11 from "./img/anime-img-11.jpg";
import animeImg12 from "./img/anime-img-12.jpg";
import actionImg1 from "./img/action-1.jpg";
import actionImg2 from "./img/action-2.jpg";
import actionImg3 from "./img/action-3.jpg";
import actionImg4 from "./img/action-4.jpg";
import actionImg5 from "./img/action-5.jpg";
import actionImg6 from "./img/action-6.jpg";
import actionImg7 from "./img/action-7.jpg";
import actionImg8 from "./img/action-8.jpg";
import childImg1 from "./img/child-1.jpg";
import childImg2 from "./img/child-2.jpg";
import childImg3 from "./img/child-3.jpg";
import childImg4 from "./img/child-4.jpg";
import childImg5 from "./img/child-5.jpg";
import childImg6 from "./img/child-6.jpg";
import childImg7 from "./img/child-7.jpg";
import familyImg1 from "./img/family-1.jpg";
import familyImg2 from "./img/family-2.jpg";
import familyImg3 from "./img/family-3.jpg";
import familyImg4 from "./img/family-4.jpg";
import familyImg5 from "./img/family-5.jpg";
import familyImg6 from "./img/family-6.jpg";
import familyImg7 from "./img/family-7.jpg";
import familyImg8 from "./img/family-8.jpg";
import ssKenganAshura1 from "./img/screenshot-img-1.jpeg";
import ssKenganAshura2 from "./img/screenshot-img-2.jpeg";
import ssKenganAshura3 from "./img/screenshot-img-3.jpeg";
import { useEffect, useState } from "react";
import EditProfile from "./Pages/Profile/EditProfile";
import {
  Routes,
  Route,
  Link,
  Navigate,
  useParams,
  useNavigate,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="login" element={<LogInPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="main" element={<Mainpage />} />
        <Route path="/profile" element={<ProfilePage />}/>
        <Route path="/profile/:userId" element={<EditProfile />}/>
        <Route path="KenganAshuraDownload" element={<KenganAshuraDownloadPage />}/>
        <Route path="KakeGuruiDownload" element={<KakeGuruiDownloadPage />} />
        <Route path="DeathNoteDownload" element={<DeathNoteDownlaodPage />}/>
        <Route path="OnePunchManDownload" element={<OnePunchManDownlaodPage />}/>
        <Route path="NarutoDownload" element={<NarutoDownlaodPage />}/>
        <Route path="BlackCloverDownload" element={<BlackCloverDownlaodPage />}/>
        <Route path="JujutsuKaisenDownload" element={<JujutsuKaisenDownlaodPage />}/>
        <Route path="HaikyuDownload" element={<HaikyuDownlaodPage />}/>
        <Route path="KurokosBasketballDownload" element={<KurukosBasketballDownlaodPage />}/>
        <Route path="MyHeroAcademiaDownload" element={<MyHeroAcademiaDownlaodPage />}/>
        <Route path="DrStoneDownload" element={<DrStoneDownlaodPage />}/>
        <Route path="TokyoRevengersDownload" element={<TokyoRevegersDownlaodPage />}/>
        <Route path="SwordArtOnlineDownload" element={<SwordArtOnlineDownloadPage />}/>
      </Routes>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <nav className="navbar  navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to="/">
          AnimeVerse
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="home-headings">
        <h1 className="heading-text">
          Deep dive into anime movies and tv shows.
        </h1>
        {/* <p className="">Sign in or Sign Up with trial account  to start watching</p> */}
        <Link
            className="btn btn-dark btn-lg download-btn home-btn"
          to="/signup"
        >
          <i className="fa-solid fa-play"></i> Get Started
        </Link>
      </div>
    </div>
  );
}

function SignUpPage() {


  const navigate = useNavigate();

  const [user, setUser] = useState({
    userName:"",email:"",phone:"",password:"",cpassword:""
  })
  
  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]:value});
  }

  const postData = async (e) => {
    e.preventDefault();

    const{ userName, email, phone, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json" 
      },
      body: JSON.stringify({
        userName, email, phone, password, cpassword
      })
    })

    const data = await res.json();

    if(res.status === 422) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }
    else {
      window.alert("Registration Successfull");
      console.log("Registration Successfull");
      navigate('/login');
    }

  }

  return (
    <div>
      <Link to="/">
        <h5>AnimeVerse</h5>
      </Link>
      <div className="signup-page">
        <div id="error"></div>
        <form method="POST">
          <h3>Sign Up</h3>
          <input
            value={user.userName}
            onChange={handleInputs}
            name="userName"
            id="username"
            type="text"
            className="input-box"
            placeholder="User name"
          />
          <input
            value={user.email}
            onChange={handleInputs}
            name="email"
            id="email"
            type="email"
            className="input-box"
            placeholder="Email"
          />
          <input
            value={user.phone}
            onChange={handleInputs}
            name="phone"
            id="phone"
            type="text"
            className="input-box"
            placeholder="Phone number"
          />
          <input
            value={user.password}
            onChange={handleInputs}
            name="password"
            id="password"
            type="password"
            className="input-box"
            placeholder="Password"
          />
          <input
            value={user.cpassword}
            onChange={handleInputs}
            name="cpassword"
            id="cpassword"
            type="password"
            className="input-box"
            placeholder="Confirm password"
          />
          <button
            type="submit"
            value="register"
            name="signup"
            id="signup"
            onClick={postData}
            className="btn btn-dark btn-md download-btn signup-btn"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

function LogInPage() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json" 
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    const data = await res.json();

    if(data.status === 400 || !data) {
      window.alert("Invalid Credentials");
    }
    else {
      window.alert("Login Successfull");
      navigate('/main');
    }
  }

  return (
    <div>
      <Link to="/">
        <h5>AnimeVerse</h5>
      </Link>
      <div className="login-page">
        <form method="POST">
          <h3>Log In</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            className="input-box"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            className="input-box"
            placeholder="Password"
          />
          <button
            type="submit"
            value="login"
            name="login"
            id="login"
            className="btn btn-dark btn-md download-btn login-btn"
            onClick={loginUser}
          >
            Log in
          </button>
          <hr />
          <p className="new-member">
            New to AnimeVerse? <Link to="/signup">sign up now</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

function NotFound() {
  return <h1>Error 404</h1>;
}

function Mainpage() {
  // const navigate = useNavigate();
  return (
    <div className="gg">
      <header>
        <Link to="/" className="logo">
          AnimeVerse
        </Link>
        <nav className="navbar">
          <Link className="nt" to="">
            home
          </Link>
          <Link to="">anime</Link>
          <Link to="">action</Link>
          <Link to="">child</Link>
          <Link to="">family</Link>
        </nav>
        <div className="icons">
          <i className="fas fa-bars" id="menu-bars"></i>
          {/* <i className="fas fa-search" id="search-icon"></i> */}
          <Link to="/profile" className="fa-solid fa-user"></Link>
        </div>
      </header>

      <section className="home" id="home">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div
                className="box "
                style={{ backgroundImage: "url(" + HomeImg1 + ")" }}
              >
                <div className="content">
                  <h3>Kakegurui</h3>
                  <p>
                    High roller Yumeko Jabami plans to clean house at Hyakkaou
                    Private
                    <br />
                    Academy, a school where students are evaluated solely on
                    their
                    <br />
                    gambling skills.
                  </p>
                  <Link to="/kakeguruiDownload" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="box second"
                style={{ backgroundImage: "url(" + HomeImg3 + ")" }}
              >
                <div className="content">
                  <h3>DEATH NOTE</h3>
                  <p>
                    When a Japanese high schooler comes into possession of a
                    mystical
                    <br />
                    notebook, he finds he has the power to kill anybody whose
                    name he
                    <br />
                    enters in it.
                  </p>
                  <Link to="/DeathNoteDownload" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="box "
                style={{ backgroundImage: "url(" + HomeImg4 + ")" }}
              >
                <div className="content">
                  <h3>One-Punch Man</h3>
                  <p>
                    The most powerful superhero in the world can kill anyone
                    with one
                    <br />
                    blow. But nothing can challenge him, so he struggles with
                    ennui and
                    <br />
                    depression
                  </p>
                  <Link to="/OnePunchManDownload" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="box "
                style={{ backgroundImage: "url(" + HomeImg2 + ")" }}
              >
                <div className="content">
                  <h3>Naruto</h3>
                  <p>
                    Guided by the spirit demon within him, orphaned Naruto
                    learns
                    <br />
                    to harness his powers as a ninja in this anime adventure
                    series.
                  </p>
                  <Link to="/NarutoDownload" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>

      <section className="anime" id="anime">
        <h1 className="heading">Popular on Anime</h1>
        <div id="popularAnime" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div
                className="box"
                style={{ backgroundImage: "url(" + animeImg1 + ")" }}
              ></div>
              <div className="content">
                <h3>Naruto</h3>
                <p>
                  Guided by the spirit demon within him, orphaned Naruto learns
                  to harness his powers as a ninja in this anime adventure
                  series.
                </p>
                <div className="linkbtn">
                  <Link to="/NarutoDownload" className="butn ">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="box"
                style={{ backgroundImage: "url(" + animeImg2 + ")" }}
              ></div>
              <div className="content">
                <h3>One-Punch Man</h3>
                <p>
                  Guided by the spirit demon within him, orphaned Naruto learns
                  to harness his powers as a ninja in this anime adventure
                  series.
                </p>
                <div className="linkbtn">
                  <Link to="/OnePunchManDownload" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="box"
                style={{ backgroundImage: "url(" + animeImg3 + ")" }}
              ></div>
              <div className="content">
                <h3>DEATH NOTE</h3>
                <p>
                  Guided by the spirit demon within him, orphaned Naruto learns
                  to harness his powers as a ninja in this anime adventure
                  series.
                </p>
                <div className="linkbtn">
                  <Link to="/DeathNoteDownload" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="box"
                style={{ backgroundImage: "url(" + animeImg4 + ")" }}
              ></div>
              <div className="content">
                <h3>Black Clover</h3>
                <p>
                  Guided by the spirit demon within him, orphaned Naruto learns
                  to harness his powers as a ninja in this anime adventure
                  series.
                </p>
                <div className="linkbtn">
                  <Link to="/BlackCloverDownload" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="box"
                style={{ backgroundImage: "url(" + animeImg5 + ")" }}
              ></div>
              <div className="content">
                <h3>Jujutsu Kaisen</h3>
                <p>
                  Guided by the spirit demon within him, orphaned Naruto learns
                  to harness his powers as a ninja in this anime adventure
                  series.
                </p>
                <div className="linkbtn">
                  <Link to="/JujutsuKaisenDownload" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="box"
                style={{ backgroundImage: "url(" + animeImg6 + ")" }}
              ></div>
              <div className="content">
                <h3>Haikyu!!</h3>
                <p>
                  Guided by the spirit demon within him, orphaned Naruto learns
                  to harness his powers as a ninja in this anime adventure
                  series.
                </p>
                <div className="linkbtn">
                  <Link to="/HaikyuDownload" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="box"
                style={{ backgroundImage: "url(" + animeImg7 + ")" }}
              ></div>
              <div className="content">
                <h3>Kuroko's Basketball</h3>
                <p>
                  Guided by the spirit demon within him, orphaned Naruto learns
                  to harness his powers as a ninja in this anime adventure
                  series.
                </p>
                <div className="linkbtn">
                  <Link to="/KurokosBasketballDownload" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="box"
                style={{ backgroundImage: "url(" + animeImg8 + ")" }}
              ></div>
              <div className="content">
                <h3>My Hero Academia</h3>
                <p>
                  Guided by the spirit demon within him, orphaned Naruto learns
                  to harness his powers as a ninja in this anime adventure
                  series.
                </p>
                <div className="linkbtn">
                  <Link to="/MyHeroAcademiaDownload" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="box"
                style={{ backgroundImage: "url(" + animeImg9 + ")" }}
              ></div>
              <div className="content">
                <h3>Dr. Stone</h3>
                <p>
                  Guided by the spirit demon within him, orphaned Naruto learns
                  to harness his powers as a ninja in this anime adventure
                  series.
                </p>
                <div className="linkbtn">
                  <Link to="/DrStoneDownload" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="box"
                style={{ backgroundImage: "url(" + animeImg10 + ")" }}
              ></div>
              <div className="content">
                <h3>Tokyo Revengers</h3>
                <p>
                  Guided by the spirit demon within him, orphaned Naruto learns
                  to harness his powers as a ninja in this anime adventure
                  series.
                </p>
                <div className="linkbtn">
                  <Link to="/TokyoRevengersDownload" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="box"
                style={{ backgroundImage: "url(" + animeImg11 + ")" }}
              ></div>
              <div className="content">
                <h3>Sword Art Online</h3>
                <p>
                  Guided by the spirit demon within him, orphaned Naruto learns
                  to harness his powers as a ninja in this anime adventure
                  series.
                </p>
                <div className="linkbtn">
                  <Link to="/SwordArtOnlineDownload" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="box"
                style={{ backgroundImage: "url(" + animeImg12 + ")" }}
              ></div>
              <div className="content">
                <h3>KENGAN ASHURA</h3>
                <p>
                  Guided by the spirit demon within him, orphaned Naruto learns
                  to harness his powers as a ninja in this anime adventure
                  series.
                </p>
                <div className="linkbtn">
                  <Link to="/KenganAshuraDownload" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#popularAnime"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#popularAnime"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>

      <section className="action" id="action">
        <h1 className="heading">Action Movies</h1>
        <div id="actionAnime" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div
                className="box"
                style={{ backgroundImage: "url(" + actionImg1 + ")" }}
              ></div>
              <div className="content">
                <h3>Kuroko's Basketball</h3>
                <p>
                  Guided by the spirit demon within him, orphaned Naruto learns
                  to harness his powers as a ninja in this anime adventure
                  series.
                </p>
                <div className="linkbtn">
                  <Link to="#" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="box"
                style={{ backgroundImage: "url(" + actionImg2 + ")" }}
              ></div>
              <div className="content">
                <h3>AHIRU NO SORA</h3>
                <p>
                  Guided by the spirit demon within him, orphaned Naruto learns
                  to harness his powers as a ninja in this anime adventure
                  series.
                </p>
                <div className="linkbtn">
                  <Link to="#" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="box"
                style={{ backgroundImage: "url(" + actionImg3 + ")" }}
              ></div>
              <div className="content">
                <h3>Seraph of the End</h3>
                <p>
                  Guided by the spirit demon within him, orphaned Naruto learns
                  to harness his powers as a ninja in this anime adventure
                  series.
                </p>
                <div className="linkbtn">
                  <Link to="#" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="box"
                style={{ backgroundImage: "url(" + actionImg4 + ")" }}
              ></div>
              <div className="content">
                <h3>Kuroko's Last Game</h3>
                <p>
                  Guided by the spirit demon within him, orphaned Naruto learns
                  to harness his powers as a ninja in this anime adventure
                  series.
                </p>
                <div className="linkbtn">
                  <Link to="#" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="box"
                style={{ backgroundImage: "url(" + actionImg5 + ")" }}
              ></div>
              <div className="content">
                <h3>Fate/Zero</h3>
                <p>
                  Guided by the spirit demon within him, orphaned Naruto learns
                  to harness his powers as a ninja in this anime adventure
                  series.
                </p>
                <div className="linkbtn">
                  <Link to="#" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="box"
                style={{ backgroundImage: "url(" + actionImg6 + ")" }}
              ></div>
              <div className="content">
                <h3>Hellsing Ultimate</h3>
                <p>
                  Guided by the spirit demon within him, orphaned Naruto learns
                  to harness his powers as a ninja in this anime adventure
                  series.
                </p>
                <div className="linkbtn">
                  <Link to="#" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="box"
                style={{ backgroundImage: "url(" + actionImg7 + ")" }}
              ></div>
              <div className="content">
                <h3>DEVILS'LINE</h3>
                <p>
                  Guided by the spirit demon within him, orphaned Naruto learns
                  to harness his powers as a ninja in this anime adventure
                  series.
                </p>
                <div className="linkbtn">
                  <Link to="#" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="box"
                style={{ backgroundImage: "url(" + actionImg8 + ")" }}
              ></div>
              <div className="content">
                <h3>Legend of Exorcism</h3>
                <p>
                  Guided by the spirit demon within him, orphaned Naruto learns
                  to harness his powers as a ninja in this anime adventure
                  series.
                </p>
                <div className="linkbtn">
                  <Link to="#" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#actionAnime"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#actionAnime"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>

      <section className="child" id="child">
        <h1 className="heading">Child Movies</h1>
        <div id="childAnime" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div
                className="box"
                style={{ backgroundImage: "url(" + childImg1 + ")" }}
              ></div>
              <div className="content">
                <h3>Beyblade</h3>
                <p>
                  Guided by the spirit demon within him, orphaned Naruto learns
                  to harness his powers as a ninja in this anime adventure
                  series.
                </p>
                <div className="linkbtn">
                  <Link to="#" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="box"
                style={{ backgroundImage: "url(" + childImg2 + ")" }}
              ></div>
              <div className="content">
                <h3>Beyblade Burst Turbo</h3>
                <p>
                  Guided by the spirit demon within him, orphaned Naruto learns
                  to harness his powers as a ninja in this anime adventure
                  series.
                </p>
                <div className="linkbtn">
                  <Link to="#" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="box"
                style={{ backgroundImage: "url(" + childImg3 + ")" }}
              ></div>
              <div className="content">
                <h3>Bakugan: Battle Planet</h3>
                <p>
                  Guided by the spirit demon within him, orphaned Naruto learns
                  to harness his powers as a ninja in this anime adventure
                  series.
                </p>
                <div className="linkbtn">
                  <Link to="#" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="box"
                style={{ backgroundImage: "url(" + childImg4 + ")" }}
              ></div>
              <div className="content">
                <h3>Sonic X</h3>
                <p>
                  Guided by the spirit demon within him, orphaned Naruto learns
                  to harness his powers as a ninja in this anime adventure
                  series.
                </p>
                <div className="linkbtn">
                  <Link to="#" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="box"
                style={{ backgroundImage: "url(" + childImg5 + ")" }}
              ></div>
              <div className="content">
                <h3>Yowamushi Pedal</h3>
                <p>
                  Guided by the spirit demon within him, orphaned Naruto learns
                  to harness his powers as a ninja in this anime adventure
                  series.
                </p>
                <div className="linkbtn">
                  <Link to="#" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="box"
                style={{ backgroundImage: "url(" + childImg6 + ")" }}
              ></div>
              <div className="content">
                <h3>Shimajiro: A Adventure</h3>
                <p>
                  Guided by the spirit demon within him, orphaned Naruto learns
                  to harness his powers as a ninja in this anime adventure
                  series.
                </p>
                <div className="linkbtn">
                  <Link to="#" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="box"
                style={{ backgroundImage: "url(" + childImg7 + ")" }}
              ></div>
              <div className="content">
                <h3>Go Astro Boy Go!</h3>
                <p>
                  Guided by the spirit demon within him, orphaned Naruto learns
                  to harness his powers as a ninja in this anime adventure
                  series.
                </p>
                <div className="linkbtn">
                  <Link to="#" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#childAnime"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#childAnime"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>

      <section className="family" id="family">
        <h1 className="heading">Family Movies</h1>
        <div id="familyAnime" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div
                className="box"
                style={{ backgroundImage: "url(" + familyImg1 + ")" }}
              ></div>
              <div className="content">
                <h3>STAND BY ME Doraemon 2</h3>
                <p>
                  Guided by the spirit demon within him, orphaned Naruto learns
                  to harness his powers as a ninja in this anime adventure
                  series.
                </p>
                <div className="linkbtn">
                  <Link to="#" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="box"
                style={{ backgroundImage: "url(" + familyImg2 + ")" }}
              ></div>
              <div className="content">
                <h3>Pokémon the Movie</h3>
                <p>
                  Guided by the spirit demon within him, orphaned Naruto learns
                  to harness his powers as a ninja in this anime adventure
                  series.
                </p>
                <div className="linkbtn">
                  <Link to="#" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="box"
                style={{ backgroundImage: "url(" + familyImg3 + ")" }}
              ></div>
              <div className="content">
                <h3>Hows Moving Castle</h3>
                <p>
                  Guided by the spirit demon within him, orphaned Naruto learns
                  to harness his powers as a ninja in this anime adventure
                  series.
                </p>
                <div className="linkbtn">
                  <Link to="#" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="box"
                style={{ backgroundImage: "url(" + familyImg4 + ")" }}
              ></div>
              <div className="content">
                <h3>Spirited Away</h3>
                <p>
                  Guided by the spirit demon within him, orphaned Naruto learns
                  to harness his powers as a ninja in this anime adventure
                  series.
                </p>
                <div className="linkbtn">
                  <Link to="#" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="box"
                style={{ backgroundImage: "url(" + familyImg5 + ")" }}
              ></div>
              <div className="content">
                <h3>My Neighbor Totoro</h3>
                <p>
                  Guided by the spirit demon within him, orphaned Naruto learns
                  to harness his powers as a ninja in this anime adventure
                  series.
                </p>
                <div className="linkbtn">
                  <Link to="#" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="box"
                style={{ backgroundImage: "url(" + familyImg6 + ")" }}
              ></div>
              <div className="content">
                <h3>Kikis Delivery Service</h3>
                <p>
                  Guided by the spirit demon within him, orphaned Naruto learns
                  to harness his powers as a ninja in this anime adventure
                  series.
                </p>
                <div className="linkbtn">
                  <Link to="#" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="box"
                style={{ backgroundImage: "url(" + familyImg7 + ")" }}
              ></div>
              <div className="content">
                <h3>Ponyo</h3>
                <p>
                  Guided by the spirit demon within him, orphaned Naruto learns
                  to harness his powers as a ninja in this anime adventure
                  series.
                </p>
                <div className="linkbtn">
                  <Link to="#" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="box"
                style={{ backgroundImage: "url(" + familyImg8 + ")" }}
              ></div>
              <div className="content">
                <h3>Arrietty</h3>
                <p>
                  Guided by the spirit demon within him, orphaned Naruto learns
                  to harness his powers as a ninja in this anime adventure
                  series.
                </p>
                <div className="linkbtn">
                  <Link to="#" className="butn">
                    Download
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#familyAnime"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#familyAnime"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
    </div>
  );
}

function ProfilePage() {

  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if(!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  }

  useEffect(() => {
    callAboutPage();
  }, []);

  return(
    <div>
      <Link to="/">
        <h5 className="profile-name">AnimeVerse</h5>
      </Link>
      <div className="profile-page">
        <div id="error"></div>
        <form method="GET">
          <h5>Your Profile</h5>
          <div className="profile-edit">
            <button onClick={() => {navigate(`/profile/${userData._id}`)}} className="profile-edit-btn">Edit Profile</button>
          </div>
          <div className="row">
            <div className="profile-details col-md-6">
              <h3 className="details">Username :</h3>
              <h3 className="details">Email :</h3>
              <h3 className="details">Phone Number :</h3>
              <h3 className="details">Password :</h3>
            </div>
            <div className="profile-info col-md-6">
              <h3 className="info">{userData.userName}</h3>
              <h3 className="info">{userData.email}</h3>
              <h3 className="info">{userData.phone}</h3>
              <h3 className="info">{userData.password}</h3>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function KenganAshuraDownloadPage() {
  return (
    <div>
      <header>
        <Link to="/" className="logo">
          AnimeVerse
        </Link>
        <nav className="navbar">
          <a className="active" href="index.html">
            home
          </a>
          <a href="#anime">anime</a>
          <a href="#action">action</a>
          <a href="#child">child</a>
          <a href="#family">family</a>
        </nav>
        <div className="icons">
          <i className="fas fa-bars" id="menu-bars"></i>
          <i className="fas fa-search" id="search-icon"></i>
          <Link to="#" className="fas fa-heart"></Link>
        </div>
      </header>

      <div className="video-container container">
      <iframe width="100%" 
        height="500px" 
        src="https://www.youtube.com/embed/CNuY4ymi4Fs" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
      </div>

      <div className="about container">
        <h2>ABOUT KENGAN ASHURA</h2>
        <p>
          Ohma Tokita enters a hidden world where corporate disputes are settled
          in brutal gladiator bouts. Forget the money, he just wants to fight --
          and win. Action-packed adventures, offbeat comedies, inspirational
          stories -- these anime movies and TV shows have a style and spirit
          unlike anything else.
        </p>
      </div>

      <div className="screenshots container">
        <h2>Screenshots</h2>
        <div className="screenshots-content">
          <img src={ssKenganAshura1} alt="" />
          <img src={ssKenganAshura2} alt="" />
          <img src={ssKenganAshura3} alt="" />
        </div>
      </div>

      <div className="download">
        <h2>Download links</h2>
        <div className="downlod-links">
          <Link to="#">For Android</Link>
          <Link to="#">For IOS</Link>
          <Link to="#">For Windows</Link>
        </div>
      </div>
    </div>
  );
}

function KakeGuruiDownloadPage() {
  return (
    <div>
      <header>
        <Link to="/" className="logo">
          AnimeVerse
        </Link>
        <nav className="navbar">
          <a className="active" href="index.html">
            home
          </a>
          <a href="#anime">anime</a>
          <a href="#action">action</a>
          <a href="#child">child</a>
          <a href="#family">family</a>
        </nav>
        <div className="icons">
          <i className="fas fa-bars" id="menu-bars"></i>
          <i className="fas fa-search" id="search-icon"></i>
          <Link to="#" className="fas fa-heart"></Link>
        </div>
      </header>

      <div className="video-container container">
        <iframe
          width="100%"
          height="500px"
          src="https://www.youtube.com/embed/cTlHQiRNVl0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div className="about container">
        <h2>ABOUT Kakegurui</h2>
        <p>Kakegurui – Compulsive Gambler is a Japanese manga series written by Homura Kawamoto and illustrated by Tōru Naomura. It began serialization in Square Enix's Gangan Joker in March 2014</p>
      </div>

      <div className="screenshots container">
        <h2>Screenshots</h2>
        <div className="screenshots-content">
          <img src={ssKenganAshura1} alt="" />
          <img src={ssKenganAshura2} alt="" />
          <img src={ssKenganAshura3} alt="" />
        </div>
      </div>

      <div className="download">
        <h2>Download links</h2>
        <div className="downlod-links">
          <Link to="#">For Android</Link>
          <Link to="#">For IOS</Link>
          <Link to="#">For Windows</Link>
        </div>
      </div>
    </div>
  );
}

function DeathNoteDownlaodPage() {
  return (
    <div>
      <header>
        <Link to="/" className="logo">
          AnimeVerse
        </Link>
        <nav className="navbar">
          <a className="active" href="index.html">
            home
          </a>
          <a href="#anime">anime</a>
          <a href="#action">action</a>
          <a href="#child">child</a>
          <a href="#family">family</a>
        </nav>
        <div className="icons">
          <i className="fas fa-bars" id="menu-bars"></i>
          <i className="fas fa-search" id="search-icon"></i>
          <Link to="#" className="fas fa-heart"></Link>
        </div>
      </header>

      <div className="video-container container">
      <iframe width="100%" height="500px" src="https://www.youtube.com/embed/NlJZ-YgAt-c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <div className="about container">
        <h2>ABOUT Death Note</h2>
        <p>The story follows Light Yagami, a teen genius who discovers a mysterious notebook: the "Death Note", which belonged to the Shinigami Ryuk, and grants the user the supernatural ability to kill anyone whose name is written in its pages.</p>
      </div>

      <div className="screenshots container">
        <h2>Screenshots</h2>
        <div className="screenshots-content">
          <img src={ssKenganAshura1} alt="" />
          <img src={ssKenganAshura2} alt="" />
          <img src={ssKenganAshura3} alt="" />
        </div>
      </div>

      <div className="download">
        <h2>Download links</h2>
        <div className="downlod-links">
          <Link to="#">For Android</Link>
          <Link to="#">For IOS</Link>
          <Link to="#">For Windows</Link>
        </div>
      </div>
    </div>
  );
}

function OnePunchManDownlaodPage() {
  return (
    <div>
      <header>
        <Link to="/" className="logo">
          AnimeVerse
        </Link>
        <nav className="navbar">
          <a className="active" href="index.html">
            home
          </a>
          <a href="#anime">anime</a>
          <a href="#action">action</a>
          <a href="#child">child</a>
          <a href="#family">family</a>
        </nav>
        <div className="icons">
          <i className="fas fa-bars" id="menu-bars"></i>
          <i className="fas fa-search" id="search-icon"></i>
          <Link to="#" className="fas fa-heart"></Link>
        </div>
      </header>

      <div className="video-container container">
      <iframe width="100%" height="500px" src="https://www.youtube.com/embed/Poo5lqoWSGw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <div className="about container">
        <h2>ABOUT One Punch Man</h2>
        <p>One-Punch Man (Japanese: ワンパンマン, Hepburn: Wanpanman) is a Japanese superhero manga series created by One. It tells the story of Saitama, a superhero who, because he can defeat any opponent with a single punch, grows bored from a lack of challenge.</p>
      </div>

      <div className="screenshots container">
        <h2>Screenshots</h2>
        <div className="screenshots-content">
          <img src={ssKenganAshura1} alt="" />
          <img src={ssKenganAshura2} alt="" />
          <img src={ssKenganAshura3} alt="" />
        </div>
      </div>

      <div className="download">
        <h2>Download links</h2>
        <div className="downlod-links">
          <Link to="#">For Android</Link>
          <Link to="#">For IOS</Link>
          <Link to="#">For Windows</Link>
        </div>
      </div>
    </div>
  );
}

function NarutoDownlaodPage() {
  return (
    <div>
      <header>
        <Link to="/" className="logo">
          AnimeVerse
        </Link>
        <nav className="navbar">
          <a className="active" href="index.html">
            home
          </a>
          <a href="#anime">anime</a>
          <a href="#action">action</a>
          <a href="#child">child</a>
          <a href="#family">family</a>
        </nav>
        <div className="icons">
          <i className="fas fa-bars" id="menu-bars"></i>
          <i className="fas fa-search" id="search-icon"></i>
          <Link to="#" className="fas fa-heart"></Link>
        </div>
      </header>

      <div className="video-container container">
      <iframe width="100%" height="500px" src="https://www.youtube.com/embed/-G9BqkgZXRA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <div className="about container">
        <h2>ABOUT Naruto</h2>
        <p>Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village. The story is told in two parts the first set in Naruto's pre-teen years, and the second in his teens.</p>
      </div>

      <div className="screenshots container">
        <h2>Screenshots</h2>
        <div className="screenshots-content">
          <img src={ssKenganAshura1} alt="" />
          <img src={ssKenganAshura2} alt="" />
          <img src={ssKenganAshura3} alt="" />
        </div>
      </div>

      <div className="download">
        <h2>Download links</h2>
        <div className="downlod-links">
          <Link to="#">For Android</Link>
          <Link to="#">For IOS</Link>
          <Link to="#">For Windows</Link>
        </div>
      </div>
    </div>
  );
}

function BlackCloverDownlaodPage() {
  return (
    <div>
      <header>
        <Link to="/" className="logo">
          AnimeVerse
        </Link>
        <nav className="navbar">
          <a className="active" href="index.html">
            home
          </a>
          <a href="#anime">anime</a>
          <a href="#action">action</a>
          <a href="#child">child</a>
          <a href="#family">family</a>
        </nav>
        <div className="icons">
          <i className="fas fa-bars" id="menu-bars"></i>
          <i className="fas fa-search" id="search-icon"></i>
          <Link to="#" className="fas fa-heart"></Link>
        </div>
      </header>

      <div className="video-container container">
      <iframe width="100%" height="500px" src="https://www.youtube.com/embed/MH4pWlX4LqI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <div className="about container">
        <h2>ABOUT Black Clover</h2>
        <p>Black Clover (Japanese: ブラッククローバー, Hepburn: Burakku Kurōbā) is a Japanese manga series written and illustrated by Yūki Tabata. The story follows Asta, a young boy born without any magic power. This is unknown to the world he lives in because seemingly everyone has some sort of magic power.</p>
      </div>

      <div className="screenshots container">
        <h2>Screenshots</h2>
        <div className="screenshots-content">
          <img src={ssKenganAshura1} alt="" />
          <img src={ssKenganAshura2} alt="" />
          <img src={ssKenganAshura3} alt="" />
        </div>
      </div>

      <div className="download">
        <h2>Download links</h2>
        <div className="downlod-links">
          <Link to="#">For Android</Link>
          <Link to="#">For IOS</Link>
          <Link to="#">For Windows</Link>
        </div>
      </div>
    </div>
  );
}

function JujutsuKaisenDownlaodPage() {
  return (
    <div>
      <header>
        <Link to="/" className="logo">
          AnimeVerse
        </Link>
        <nav className="navbar">
          <a className="active" href="index.html">
            home
          </a>
          <a href="#anime">anime</a>
          <a href="#action">action</a>
          <a href="#child">child</a>
          <a href="#family">family</a>
        </nav>
        <div className="icons">
          <i className="fas fa-bars" id="menu-bars"></i>
          <i className="fas fa-search" id="search-icon"></i>
          <Link to="#" className="fas fa-heart"></Link>
        </div>
      </header>

      <div className="video-container container">
      <iframe width="100%" height="500px" src="https://www.youtube.com/embed/f7R6NA4Yo00" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <div className="about container">
        <h2>ABOUT Jujutsu Kaisen</h2>
        <p>Jujutsu Kaisen (呪術廻戦) is a Japanese manga series written and illustrated by Gege Akutami. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since March 2018, with its chapters collected and published in 20 tankōbon volumes as of August 2022.</p>
      </div>

      <div className="screenshots container">
        <h2>Screenshots</h2>
        <div className="screenshots-content">
          <img src={ssKenganAshura1} alt="" />
          <img src={ssKenganAshura2} alt="" />
          <img src={ssKenganAshura3} alt="" />
        </div>
      </div>

      <div className="download">
        <h2>Download links</h2>
        <div className="downlod-links">
          <Link to="#">For Android</Link>
          <Link to="#">For IOS</Link>
          <Link to="#">For Windows</Link>
        </div>
      </div>
    </div>
  );
}

function HaikyuDownlaodPage() {
  return (
    <div>
      <header>
        <Link to="/" className="logo">
          AnimeVerse
        </Link>
        <nav className="navbar">
          <a className="active" href="index.html">
            home
          </a>
          <a href="#anime">anime</a>
          <a href="#action">action</a>
          <a href="#child">child</a>
          <a href="#family">family</a>
        </nav>
        <div className="icons">
          <i className="fas fa-bars" id="menu-bars"></i>
          <i className="fas fa-search" id="search-icon"></i>
          <Link to="#" className="fas fa-heart"></Link>
        </div>
      </header>

      <div className="video-container container">
      <iframe width="100%" height="500px" src="https://www.youtube.com/embed/JOGp2c7-cKc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <div className="about container">
        <h2>ABOUT Haikyu</h2>
        <p>Haikyu is a Japanese manga series written and illustrated by Haruichi Furudate. The story follows Shoyo Hinata, a boy determined to become a great volleyball player despite his small stature.</p>
      </div>

      <div className="screenshots container">
        <h2>Screenshots</h2>
        <div className="screenshots-content">
          <img src={ssKenganAshura1} alt="" />
          <img src={ssKenganAshura2} alt="" />
          <img src={ssKenganAshura3} alt="" />
        </div>
      </div>

      <div className="download">
        <h2>Download links</h2>
        <div className="downlod-links">
          <Link to="#">For Android</Link>
          <Link to="#">For IOS</Link>
          <Link to="#">For Windows</Link>
        </div>
      </div>
    </div>
  );
}

function KurukosBasketballDownlaodPage() {
  return (
    <div>
      <header>
        <Link to="/" className="logo">
          AnimeVerse
        </Link>
        <nav className="navbar">
          <a className="active" href="index.html">
            home
          </a>
          <a href="#anime">anime</a>
          <a href="#action">action</a>
          <a href="#child">child</a>
          <a href="#family">family</a>
        </nav>
        <div className="icons">
          <i className="fas fa-bars" id="menu-bars"></i>
          <i className="fas fa-search" id="search-icon"></i>
          <Link to="#" className="fas fa-heart"></Link>
        </div>
      </header>

      <div className="video-container container">
      <iframe width="100%" height="500px" src="https://www.youtube.com/embed/1KLvA6FMNiE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <div className="about container">
        <h2>ABOUT Kuroko's Basketball</h2>
        <p>Kuroko's Basketball is a Japanese sports manga series written and illustrated by Tadatoshi Fujimaki. It was serialized in Weekly Shōnen Jump from December 2008 to September 2014, with the individual chapters collected into 30 tankōbon volumes by Shueisha.</p>
      </div>

      <div className="screenshots container">
        <h2>Screenshots</h2>
        <div className="screenshots-content">
          <img src={ssKenganAshura1} alt="" />
          <img src={ssKenganAshura2} alt="" />
          <img src={ssKenganAshura3} alt="" />
        </div>
      </div>

      <div className="download">
        <h2>Download links</h2>
        <div className="downlod-links">
          <Link to="#">For Android</Link>
          <Link to="#">For IOS</Link>
          <Link to="#">For Windows</Link>
        </div>
      </div>
    </div>
  );
}

function MyHeroAcademiaDownlaodPage() {
  return (
    <div>
      <header>
        <Link to="/" className="logo">
          AnimeVerse
        </Link>
        <nav className="navbar">
          <a className="active" href="index.html">
            home
          </a>
          <a href="#anime">anime</a>
          <a href="#action">action</a>
          <a href="#child">child</a>
          <a href="#family">family</a>
        </nav>
        <div className="icons">
          <i className="fas fa-bars" id="menu-bars"></i>
          <i className="fas fa-search" id="search-icon"></i>
          <Link to="#" className="fas fa-heart"></Link>
        </div>
      </header>

      <div className="video-container container">
      <iframe width="100%" height="500px" src="https://www.youtube.com/embed/EPVkcwyLQQ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <div className="about container">
        <h2>ABOUT My Hero Academia</h2>
        <p>My Hero Academia is a Japanese superhero manga series written and illustrated by Kōhei Horikoshi.</p>
      </div>

      <div className="screenshots container">
        <h2>Screenshots</h2>
        <div className="screenshots-content">
          <img src={ssKenganAshura1} alt="" />
          <img src={ssKenganAshura2} alt="" />
          <img src={ssKenganAshura3} alt="" />
        </div>
      </div>

      <div className="download">
        <h2>Download links</h2>
        <div className="downlod-links">
          <Link to="#">For Android</Link>
          <Link to="#">For IOS</Link>
          <Link to="#">For Windows</Link>
        </div>
      </div>
    </div>
  );
}

function DrStoneDownlaodPage() {
  return (
    <div>
      <header>
        <Link to="/" className="logo">
          AnimeVerse
        </Link>
        <nav className="navbar">
          <a className="active" href="index.html">
            home
          </a>
          <a href="#anime">anime</a>
          <a href="#action">action</a>
          <a href="#child">child</a>
          <a href="#family">family</a>
        </nav>
        <div className="icons">
          <i className="fas fa-bars" id="menu-bars"></i>
          <i className="fas fa-search" id="search-icon"></i>
          <Link to="#" className="fas fa-heart"></Link>
        </div>
      </header>

      <div className="video-container container">
      <iframe width="100%" height="500px" src="https://www.youtube.com/embed/KnEMDDMYYfU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <div className="about container">
        <h2>ABOUT Doctor Stone</h2>
        <p>Doctor Stone is a Japanese manga series written by Riichiro Inagaki and illustrated by the South Korean artist Boichi. It was serialized in Shueisha's Weekly Shōnen Jump from March 2017 to March 2022, with its chapters collected in twenty-five tankōbon volumes as of March 2022.</p>
      </div>

      <div className="screenshots container">
        <h2>Screenshots</h2>
        <div className="screenshots-content">
          <img src={ssKenganAshura1} alt="" />
          <img src={ssKenganAshura2} alt="" />
          <img src={ssKenganAshura3} alt="" />
        </div>
      </div>

      <div className="download">
        <h2>Download links</h2>
        <div className="downlod-links">
          <Link to="#">For Android</Link>
          <Link to="#">For IOS</Link>
          <Link to="#">For Windows</Link>
        </div>
      </div>
    </div>
  );
}

function TokyoRevegersDownlaodPage() {
  return (
    <div>
      <header>
        <Link to="/" className="logo">
          AnimeVerse
        </Link>
        <nav className="navbar">
          <a className="active" href="index.html">
            home
          </a>
          <a href="#anime">anime</a>
          <a href="#action">action</a>
          <a href="#child">child</a>
          <a href="#family">family</a>
        </nav>
        <div className="icons">
          <i className="fas fa-bars" id="menu-bars"></i>
          <i className="fas fa-search" id="search-icon"></i>
          <Link to="#" className="fas fa-heart"></Link>
        </div>
      </header>

      <div className="video-container container">
      <iframe width="100%" height="500px" src="https://www.youtube.com/embed/eeLFOGkDFyA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <div className="about container">
        <h2>ABOUT Tokyo Revengers</h2>
        <p>Tokyo Revengers is a Japanese manga series written and illustrated by Ken Wakui. It has been serialized in Kodansha's Weekly Shōnen Magazine since March 2017. An anime television series adaptation by Liden Films aired from April to September 2021.</p>
      </div>

      <div className="screenshots container">
        <h2>Screenshots</h2>
        <div className="screenshots-content">
          <img src={ssKenganAshura1} alt="" />
          <img src={ssKenganAshura2} alt="" />
          <img src={ssKenganAshura3} alt="" />
        </div>
      </div>

      <div className="download">
        <h2>Download links</h2>
        <div className="downlod-links">
          <Link to="#">For Android</Link>
          <Link to="#">For IOS</Link>
          <Link to="#">For Windows</Link>
        </div>
      </div>
    </div>
  );
}

function SwordArtOnlineDownloadPage() {
  return (
    <div>
      <header>
        <Link to="/" className="logo">
          AnimeVerse
        </Link>
        <nav className="navbar">
          <a className="active" href="index.html">
            home
          </a>
          <a href="#anime">anime</a>
          <a href="#action">action</a>
          <a href="#child">child</a>
          <a href="#family">family</a>
        </nav>
        <div className="icons">
          <i className="fas fa-bars" id="menu-bars"></i>
          <i className="fas fa-search" id="search-icon"></i>
          <Link to="#" className="fas fa-heart"></Link>
        </div>
      </header>

      <div className="video-container container">
      <iframe width="100%" height="500px" src="https://www.youtube.com/embed/6ohYYtxfDCg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <div className="about Sword Art Online">
        <h2>ABOUT Sword Art Online</h2>
        <p>Sword Art Online is a Japanese light novel series written by Reki Kawahara and illustrated by abec.</p>
      </div>

      <div className="screenshots container">
        <h2>Screenshots</h2>
        <div className="screenshots-content">
          <img src={ssKenganAshura1} alt="" />
          <img src={ssKenganAshura2} alt="" />
          <img src={ssKenganAshura3} alt="" />
        </div>
      </div>

      <div className="download">
        <h2>Download links</h2>
        <div className="downlod-links">
          <Link to="#">For Android</Link>
          <Link to="#">For IOS</Link>
          <Link to="#">For Windows</Link>
        </div>
      </div>
    </div>
  );
}

export default App;
