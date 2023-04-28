const Footer = () => {
  let date = new Date();
  return (
    <footer className="white-text small-text">&copy; GDG Maiduguri {date.getFullYear()}</footer>
  )
}

export default Footer;
