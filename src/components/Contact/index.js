
export default function Contact() {
    return (
        <>
            <div className="container">
                <div className="row">

                    <div className="mb-3">
                        <label for="nameControlInput" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="nameControlInput" placeholder="Enter your full name" />
                    </div>
                    <div className="mb-3">
                        <label for="emailControlInput" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="emailControlInput" placeholder="Enter your email address" />
                    </div>
                    <div className="mb-3">
                        <label for="messageControlInput" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="messageControlInput" rows="3"></textarea>
                    </div>
                </div>

            </div>

        </>
    )
}