const Footer = () => {
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">&copy; 2023 Feastify. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-500">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-500">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
