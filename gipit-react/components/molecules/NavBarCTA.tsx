import Button from "../atoms/Button";
import "./navBarCTA.css";

interface NavBarCTAProps {
  title: string;
  description: string;
  href: string;
  cta: string;
  icon: any;
}

function NavBarCTA({ title, description, href, cta, icon }: NavBarCTAProps) {
  return (
    <div className="navbar-cta-container">
      <div className="icon-container">{icon}</div>
      <h4>{title}</h4>
      <p className="text-12">{description}</p>
      <Button href={href} text={cta} type="over-red" />
    </div>
  );
}

export default NavBarCTA;