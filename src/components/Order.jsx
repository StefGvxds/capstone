import React, {useState} from "react";
import './Order.css'


export default function Order() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date: "",
        time: "",
        guests: "",
        message: "",
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setFormData({
            name: '',
            email: '',
            date: '',
            time: '',
            guests: '',
            message: ''
        });
    };

    return (
        <section className="order-section">
            <div className="order-title">
                <h1>
                    Welcome to our restaurant reservation form!
                </h1>
            </div>
            <div className="order-form-img">
                <form className="reservation-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                        <div className="form-group">
                            <label htmlFor="date">Date:</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="time">Time:</label>
                            <input
                                type="time"
                                id="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="guests">Guests:</label>
                            <input
                                type="number"
                                id="guests"
                                name="guests"
                                min="1"
                                value={formData.guests}
                                onChange={handleChange}
                                required
                            />
                        </div>

                    <div className="form-group">
                        <label htmlFor="message">Special Requests:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                        />
                    </div>

                    <button type="submit" className="submit-btn">Make Reservation</button>
                </form>
            </div>

        </section>
    );
}