import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div>
    <Logo />
    {/* Menu de navigation */}
    <Navigation />
      <h1>A propos</h1>
      <br />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, eius
        aliquid? Aliquam assumenda rem, modi et ab unde adipisci quam architecto
        nisi natus! Consequatur, porro sed hic officiis, sit explicabo laborum
        cum veritatis debitis exercitationem, tempora doloremque dicta veniam in
        nostrum repellat. Vitae possimus recusandae suscipit? Quidem autem totam
        commodi?
      </p>
      <br />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus
        vitae placeat ratione rem nesciunt maxime dolor iure quisquam ipsum
        aliquid! Est ducimus fuga minus rerum molestiae quae nostrum quis non
        laboriosam? Magni ut quos dolorem ea explicabo dicta deserunt eligendi
        quia cupiditate impedit vitae repellendus iure ipsam cum, provident eum
        commodi, consectetur voluptates? Sapiente similique corrupti ipsam fuga
        iusto alias ducimus deserunt rerum, eos fugiat unde odit! Perspiciatis
        unde, voluptatibus quae natus facere est consectetur.
      </p>
    </div>
  );
};

export default About;
