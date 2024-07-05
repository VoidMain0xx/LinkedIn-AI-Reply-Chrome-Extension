import React from 'react';

const ExtensionIntro: React.FC = () => {
    return (
        <div>
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900">LinkedIn Ai Writter</h1>
                <img src="https://chatgptwriter.ai/og.jpg" alt="Extension Logo" className="mx-auto mt-4 h-24" />
            </div>

            {/* Introduction Section */}
            <section className="bg-white shadow-md rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Your Extension</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    <h3>Input Handling:</h3>

                    <h3>User Messages:</h3> It accepts user messages as input, typically in text format.
                    Context Understanding: Utilizes natural language processing (NLP) techniques to understand the context and intent behind user queries or statements.
                    AI Model Integration:

                    <h3>GPT Model:</h3> Integrates the GPT model, a type of deep learning model specifically designed for natural language processing tasks such as text generation and understanding.
                    Pre-trained Knowledge: Leverages a pre-trained GPT model (like GPT-3) which has been trained on vast amounts of text data to understand and generate human-like responses.
                    Response Generation:

                    <h3>Contextual Generation:</h3>Contextual Generation: Generates responses based on the input message and the current conversation context. The model can maintain context over multiple turns of dialogue.
                    Natural Language Generation: Produces responses that are fluent, contextually relevant, and grammatically correct, mimicking human conversational style.
                    Customization and Adaptation:

                    <h3>Fine-tuning: </h3>Fine-tuning: Optionally, the system can be fine-tuned on specific datasets or domains to improve response accuracy and relevance for particular applications.
                    Personalization: Can be configured to personalize responses based on user preferences or historical interactions.
                    Integration and Deployment:

                    <h3>API Integration:</h3>API Integration: Provides an API or SDK for easy integration into chat applications, websites, or other platforms requiring automated response capabilities.
                    Scalability: Designed to handle large volumes of concurrent requests, ensuring scalability and responsiveness in real-time applications.
                    Monitoring and Improvement:

                    <h3>Feedback Mechanism:</h3>Feedback Mechanism: Includes mechanisms for collecting feedback on generated responses to improve accuracy and user satisfaction over time.
                    Continuous Learning: Supports ongoing model updates and improvements based on new data and user interactions.
                    Ethical Considerations:

                    <h3>Bias Mitigation:</h3>Bias Mitigation: Implements measures to mitigate biases inherent in training data and model outputs, ensuring fair and inclusive interactions.
                    Transparency: Provides transparency regarding the use of AI in chat interactions, including clear indication when users are interacting with automated systems.
                </p>
            </section>

            {/* Visuals and Demonstration */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">See It in Action</h2>
                {/* Replace with your extension screenshots or GIFs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <img src="screenshot1.png" alt="Screenshot 1" className="rounded-lg shadow-md transition duration-500 transform hover:scale-105" />
                    <img src="screenshot2.png" alt="Screenshot 2" className="rounded-lg shadow-md transition duration-500 transform hover:scale-105" />
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mb-8">
                <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-bold text-lg shadow-lg transition duration-300 transform hover:scale-105">
                    Buy premium
                </a>
            </div>

            {/* Additional Information */}       
            <div className="text-center">
                <p className="text-gray-700">
                    Learn more about us on <a href="#" className="text-blue-500 hover:underline">our website</a>.
                </p>
            </div>
        </div>
    );
}

export default ExtensionIntro;
