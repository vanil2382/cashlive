
import "./Dashboard.css";
import "./About.css";

function AboutPage() {

  return (
        <div className="Dashboard">

      <h2>
      !! About Page - Work in progress !! <i class="fas fa-user"></i>{" "}
      </h2>

<p> 
<h2>This is a proof of concept version </h2>
<ol>
<li> The source code can be located at https://github.com/vanil2382/cashlive/tree/ChartsDashboard </li>
<li>Makes use firebase for database</li>
<li>Integrates with json files, an be extended to json CRUD commands. </li>
<li>Web application hosted on netlify </li>
</ol>
</p>

<p>
<h2>Next Steps: Long term</h2>
<ol>
<li>Capture detailed product requirement. </li>
<li>Design site maps/customer journey maps/ user flow diagram/Wireframes/Mocks and design layouts.</li>
<li>Logic to onboard role based users - roles to view movement of funds across cost centers/corporates/subsidiaries and group.</li>
<li>Design 'approval workflow' with pending actions displayed</li>
<li>Payments to include - CARD/SEPA/SWIFT/FX incl cross border remittences.</li>
<li>Build daily and monthly reports/incl bespoke reports.</li>
</ol>
</p>

<h3> CashLive product: <br></br>
Version 29.12.2022-01 (Unofficial Build) (64-bit) </h3>

      </div>
     );
  }

export default AboutPage;
