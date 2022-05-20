import React from 'react'
import './SubFooter.css'


function Subfooter() {
  return (
    <div className='footer'>
      <div className='bottom-fade'>
        <div className='middle-bottom'>
          <div className='container'>
              <h1>There’s even more to watch.</h1>
              <p className='desc'>Netflix has an extensive library of feature films, 
                documentaries, TV shows, anime, award-winning Netflix originals, 
                and more. Watch as much as you want, anytime you want.</p>
            
              <button className='footer-button'>Join Now</button>
          </div>
        </div>

          <div className='last-footer'>
            <p>Questions? Contact us.</p>
            <div className='list'>
              <ul>
                <li>FAQ</li>
                <li>Privacy</li>
                <li>Investor Relations</li>
                <li>Speed Test</li>
              </ul>

              <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
                <li>Legal Notice</li>
              </ul>

              <ul>
                <li>Account</li>
                <li>Ways to Watch</li>
                <li>Corporate Information</li>
                <li>Only on Netflix</li>
              </ul>

              <ul>
                <li>Media Center</li>
                <li>Terms of Use</li>
                <li>Only on Netflix</li>
              </ul>
            </div>
          </div>
      </div>
      
    </div>
   
  )
}

export default Subfooter