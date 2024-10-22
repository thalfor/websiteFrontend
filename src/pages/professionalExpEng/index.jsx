//
import { Container, Courses } from './styles'; 
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
export function ProfessionalExpEng() {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0rem",
    slidesToShow: 3,
    speed: 500
  };

  return (
    <div>

      <Container>

        <h1>Career</h1>

        <Slider {...settings}>
          <div className="job">
            <strong>Pan Bank</strong><br></br>
            Feb 2023 to May 2024<br></br>
            <strong><u>Role:</u></strong><br></br> Specialist - Loan Portfolio Pricing<br></br>
            <strong><u>Key Focus:</u></strong><br></br> Led pricing for buying/selling loan portfolios between banks. Programmed and automated pricing models using Python, SQL, and AWS. Optimized transaction pricing with successful project deployment.<br></br>
            <strong><u>Tools:</u></strong><br></br> SQL, AWS, Python.
          </div>
          <div className="job">
            <strong>Safra Bank</strong><br></br>
            July 2017 to Aug 2022<br></br>
            <strong><u>Role:</u></strong><br></br> Team Leader - CRM & Finance<br></br>
            <strong><u>Key Focus:</u></strong><br></br> Managed a team of 3; developed and modernized fixed-income results calculators using SQL. Deployed the new tools into production, improving accuracy and efficiency. Later transitioned to FP&A, where I led data-driven financial analysis projects leveraging Python and SQL.<br></br>
            <strong><u>Tools:</u></strong><br></br> SQL, Python.
          </div>
          <div className="job">
            <strong>Itaú Bank</strong><br></br>
            June 2015 to June 2017<br></br>
            <strong><u>Role:</u></strong><br></br> Junior Analyst - Finance<br></br>
            <strong><u>Key Focus:</u></strong><br></br> Part of the lead team for the &apos;80x20&apos; project, merging results and systems after Itaú's acquisition of BBA. Combined SQL, SAS, and MS Office tools for successful project delivery and market presentation.<br></br>
            <strong><u>Tools:</u></strong><br></br> SQL, SAS, MS Office.
          </div>
          <div className="job">
            <strong>Itaú Bank</strong><br></br>
            Aug 2014 to June 2015<br></br>
            <strong><u>Role:</u></strong><br></br> Intern - Data Analyst<br></br>
            <strong><u>Key Focus:</u></strong><br></br> Developed data models to enhance customer experience in the call center. Utilized SQL and SAS to analyze and improve processes.<br></br><br></br>
            <strong><u>Tools:</u></strong><br></br> SQL, SAS.
          </div>
          <div className="job">
            <strong>Equifax | Boa Vista</strong><br></br>
            May 2013 to Nov 2013<br></br>
            <strong><u>Role:</u></strong><br></br> Intern / Data Analyst<br></br>
            <strong><u>Key Focus:</u></strong><br></br> Built credit score evaluations using SQL and SAS, assisting companies in loan decisions and debt recovery. Successfully deployed data solutions into production.<br></br>
            <strong><u>Tools:</u></strong><br></br> SQL, SAS.
          </div>
          <div className="job">
            <strong>Quanta Jr. (University)</strong><br></br>
            Jan 2010 to Dec 2012<br></br>
            <strong><u>Role:</u></strong><br></br> Lead Project Creator<br></br>
            <strong><u>Key Focus:</u></strong><br></br> Created and led the "Physics Show," showcasing experiments with government support. Involved in project management and execution.<br></br>
          </div>
        </Slider>
        
      </Container>

      <Courses>

        <h1>Academic</h1>

        <div className='formation'>
          <strong>Bachelor at Physics: University of São Paulo (USP).</strong>
        </div>

        <div className='cousesMaster'>
          <div className='courses'>
            <strong>RocketSeat Node.js Expert - on going</strong>
          </div>

          <div className='courses'>
            <strong>RocketSeat Explorer - 2024</strong>
            HTML & CSS.<br></br>
            Javascript.<br></br>
            Git & Github.<br></br>
            Backend Jr (NodeJS).<br></br>
            Frontend Jr (React).<br></br>
            Back and Front Integration.<br></br>
            Deploy.
          </div>
            
          <div className='courses'>
            <strong>FreeCodeCamp - 2023</strong>
            JavaScript Algorithms and Data Structures.
          </div>
            
          <div className='courses'>
            <strong>Google - 2022</strong>
            Project initiation: Starting a successful project.<br></br>
            Foundations of Project Management.
          </div>
        </div>

      </Courses>

    </div>
  );
}
//
//

//
/*
      <br></br><br></br><br></br>Courses:<br></br>
      <div>
        RocketSeat Explorer: <br></br>
        HTML & CSS. 26/06/2024 <br></br>
        Javascript. 06/08/2024 <br></br>
        Git & Github. 13/08/2024 <br></br>
        Backend Jr (NodeJS). 23/08/2024 <br></br>
        Frontend Jr (React). 15/09/2024 <br></br>
        Back and Front Integration; 24/09/2024 <br></br>
        Deploy. 26/09/2024 <br></br>
      </div>
        
      <div>
        FreeCodeCamp:<br></br>
        JavaScript Algorithms and Data Structures. 02/01/2023 <br></br>
      </div>
        
      <div>
        Google: <br></br>
        Project initiation: Starting a successful project. 19/06/2022 <br></br>
        Foundations of Project Management. 13/06/2022 <br></br>
      </div>

      <div>
        <br></br><br></br>Bachelor at Physics: University of São Paulo (USP).
      </div>
*/