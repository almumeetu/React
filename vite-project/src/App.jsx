import ContactForm from "./assets/component/ContactForm";
import Header from "./assets/component/Header";
import Hero from "./assets/component/Hero";
import Footer from './assets/component/Footer';

const App = () => {
  return (
    <div>
       <Header />
       <Hero />
       <ContactForm />
       <Footer />
    </div>
  );
};

export default App;

//JSX CONVENTIONS
//1. You Need to return a Single parent Element in JSX
//2. You can Implement JS Directly in JSX by using {}
//3. All tags Self-close in JSX
//4. ClassName and HTMLFor, not class and for in JSX
//5. Write all HTML Attributes in camelCase in JSX
//6. Write Inline Styles as Object in JSX