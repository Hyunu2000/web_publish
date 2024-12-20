import React, { useEffect, useState } from 'react';

export default function Testimonials() {
    const [testimonial, setTestimonial] = useState([]);

    useEffect(() => {
        fetch('/data/testimonials.json')
            .then(data => data.json())
            .then(jsonData => setTestimonial(jsonData))
            .catch(error => console.log(error))
    }, []);

    return (
        <section id="testimonial" className="section max-container">
            <h2 className="title">Testimonial</h2>
            <p className="description">See what they say about me</p>
            <ul className="testimonials">
                {testimonial.map((testimonial, index) => (
                    <li className="testimonial" key={index}>
                        <img className="testimonial__img" src={testimonial.image} alt={`person${index + 1}`} />
                        <div className="testimonial__bubble">
                            <p>{testimonial.feedback}</p>
                            <p>
                                <a href="#" className="testimonial__bubble__name">{testimonial.name}</a> / {testimonial.company}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}


