
import "./ui/globals.css";
import Introduction from "./components/introduction.jsx";
import ItemsList from "./components/itemsList.jsx";
import Summary from "./components/summary.jsx";
import Socials from "./components/socials.jsx";

export default function App() {

  let skills = ['Data Structures & Algorithms','Java: Spring', 'HTML', 'CSS', 'JavaScript: React, Node.js, DOM',
     'SQL: Postgres, Microsoft Azure', 'Agile', 'Tableau'];
  let socials = ['GitHub', 'LinkedIn'];

  return (

    <div>
        <div className="dark">
          <Introduction/>
          <Summary />
        </div>

        
          <ItemsList items={skills} myClass='skillList' heading="My Skills"/>
          
          <p className="credits">Site developed by me using React, HTML, and CSS.</p>

      

    </div>
  
    
  );
}

