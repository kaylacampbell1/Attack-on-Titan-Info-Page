let titans = document.querySelector("#nine");
let warning = document.querySelector("h4");
let instructions = document.querySelector("#warn");
let button = document.querySelector("#load");
let title = document.querySelector("h2");
function add() {
  warning.remove("h4");
  title.innerHTML = "The Nine Titans";
  instructions.remove("#warn");
  button.remove("button");
  titans.innerHTML = `<div class="titan-box">
            <h5>Colossal Titan</h5>
            <span>
              <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/060/609/original/colossaltitan.jpeg?1672286761" class="titan-img"/>
                <div>
                  <h6>Known For</h6>
                  <ul>
                    <li>Releases steam</li>
                    <li>The tallest titan</li>
                  </ul>
                </div>
            </span>
            <p></p>
          </div>
          <div class="titan-box">
            <h5>Female Titan</h5>
            <span>
              <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/060/611/original/femaletitan.jpeg?1672286797" class="titan-img"/>
              <div>
                <h6>Known For</h6>
                <ul>
                  <li>Ability to summon other titans</li>
                </ul>
              </div>
            </span>
            <p></p>
          </div>
          <div class="titan-box">
            <h5>Attack Titan</h5>
            <span>
              <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/060/612/original/attacktitan.jpeg?1672286909" class="titan-img"/>
              <div>
                <h6>Known For</h6>
                <ul>
                  <li>Being reckless</li>
                  <li>Hardening ability</li>
                </ul>
              </div>
            </span>
            <p></p>
          </div>
          
          <div class="titan-box">
            <h5>Armored Titan</h5>
            <span>
              <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/060/613/original/armoredtitan.jpeg?1672286951" class="titan-img"/>
             
              <div>
                <h6>Known For</h6>
                <ul>
                  <li>Being covered in armor</li>
                </ul>
              </div>
            </span>
            <p></p>
          </div>
          <div class="titan-box">
            <h5>Beast Titan</h5>
            <span>
              <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/060/614/original/beasttitan.jpeg?1672286998" class="titan-img"/>
              
              <div>
                <h6>Known For</h6>
                <ul>
                  <li>Throwing Skills</li>
                  <li>Long Arms</li>
                </ul>
              </div>
            </span>
            <p></p>
          </div>
          <div class="titan-box">
            <h5>Cart Titan</h5>
            <span>
              <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/060/615/original/carttitan.jpeg?1672287037" class="titan-img"/>
              
              <div>
                <h6>Known For</h6>
                <ul>
                  <li>Walking on all fours</li>
                  <li>Carring a container on it's back</li>
                </ul>
              </div>
            </span>
            <p></p>
          </div>
          <div class="titan-box">
            <h5>Jaw Titan</h5>
            <span>
              <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/060/616/original/jawtitan.jpeg?1672287058" class="titan-img"/>
              
              <div>
                <h6>Known For</h6>
                <ul>
                  <li>Speed</li>
                  <li>Sharp teeth/claws</li>
                </ul>
              </div>
            </span>
            <p></p>
          </div>
          <div class="titan-box">
            <h5>War Hammer Titan</h5>
            <span>
              <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/060/610/original/warhammertitan2.jpeg?1672286783" class="titan-img"/>
              <div>
                <h6>Known For</h6>
                <ul>
                  <li>The ability to create any weapon</li>
                  <li>User is connected to the feet instead of the titan's nape</li>
                </ul>
              </div>
            </span>
            <p></p>
          </div>
          <div class="titan-box">
            <h5>Founding Titan</h5>
            <span>
              <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/060/617/original/foundingtitan.jpeg?1672287229" class="titan-img"/>
              <div>
                <h6>Known For</h6>
                <ul>
                  <li>It's ability to alter memories</li>
                  <li>Ability to control other titans</li>
                </ul>
              </div>
            </span>
            <p></p>
          </div>`;
}
let netflixButton = document.querySelector("#netflix-button");
let huluButton = document.querySelector("#hulu-button");
function watchNetflix() {
  confirm("This series is no longer available on this streaming platform, click 'OK' to continue to Netflix") === true ? window.open( "https://www.netflix.com/title/70299043?trkid=13747225&s=i&vlang=en&clip=81029715","_blank") : alert("I understand, feel free to check out the rest of this website");
}
function watchHulu() {
  confirm("This series contains violence, gore, profanities e.t.c. and is rated TVMA") === true ? window.open("https://www.hulu.com/series/9c91ffa3-dc20-48bf-8bc5-692e37c76d88","_blank") : 
    alert("I understand, feel free to check out the rest of this website");
}

netflixButton.addEventListener("click", watchNetflix);
huluButton.addEventListener("click", watchHulu);
button.addEventListener("click", add);
