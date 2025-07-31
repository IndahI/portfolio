import { AkarIconsGear } from "../icon/AkarIconsGear";
import { BasilDesktopOutline } from "../icon/BasilDesktopOutline";
import { IconParkOutlineLightning } from "../icon/IconParkOutlineLightning";
import { MaterialSymbolsCloudOutline } from "../icon/MaterialSymbolsCloudOutline";
import { MaterialSymbolsCode } from "../icon/MaterialSymbolsCode";
import { MaterialSymbolsDatabaseOutline } from "../icon/MaterialSymbolsDatabaseOutline";
import { MdiCubeOutline } from "../icon/MdiCubeOutline";

export default function Skill() {
  return (
    <div className="section-container w-full skill">
      <h2 className="section-title">Technical Expertise</h2>
      <div className="grid-2">
        <div className="card skill-card">
          <p className="skill-title">Languages</p>
          <ul className="skill-list">
            <li><MaterialSymbolsCode /> JavaScript, HTML, CSS, Python, Java, C#</li>
            <li><IconParkOutlineLightning /> C++</li>
          </ul>
        </div>

        <div className="card skill-card">
          <p className="skill-title">Frameworks</p>
          <ul className="skill-list">
            <li><BasilDesktopOutline /> Next.js, Node.js, Laravel, ASP.NET</li>
            <li><AkarIconsGear /> Flask, FastAPI</li>
          </ul>
        </div>

        <div className="card skill-card">
          <p className="skill-title">Cloud & Databases</p>
          <ul className="skill-list">
            <li><MaterialSymbolsCloudOutline /> AWS, AWS S3</li>
            <li><MaterialSymbolsDatabaseOutline /> MySQL, SQLite, DynamoDB</li>
          </ul>
        </div>

        <div className="card skill-card">
          <p className="skill-title">Developer Tools</p>
          <ul className="skill-list">
            <li><MdiCubeOutline /> Git, Docker, Terraform, VS Code</li>
            <li style={{ visibility: 'hidden' }}>.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
