import LoginForm from "../../components/forms/LoginForm";
import SignUpForm from "../../components/forms/SignUpForm";
export default function AuthPage() {
    return (
        <>
            <h1>Auth Page</h1>
            <div>Carousel Component</div>
            <button>Toggle Forms - Radio Button</button>
            {/* if mode = signup  */}
            <SignUpForm />
            <LoginForm />
        </>
    )
}