import './FeedBack.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { host } from '../../mdr.config';
import ReturnMainPage from '../mess/ReturnMainPage';

function FeedBack() {
    const [isLogged, setIsLogged] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [feedbackContent, setFeedbackContent] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Feedback | Mdr-C-Tutorial";
        const checkAuth = async () => {
            try {
                const response = await fetch(`${host}/login`, {
                    method: 'GET',
                    credentials: 'include',
                });
                setIsLogged(response.ok);
            } catch (error) {
                console.error('Error checking auth:', error);
                setIsLogged(false);
            } finally {
                setIsLoading(false);
            }
        };
        checkAuth();
    }, []);

    const handleSubmit = async () => {
        try {
            const response = await fetch(`${host}/feedback`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content: feedbackContent }),
            });

            if (response.ok) {
                alert('反馈提交成功！');
                setFeedbackContent('');
            } else {
                alert('提交失败，请稍后重试');
            }
        } catch (error) {
            console.error('Error submitting feedback:', error);
            alert('提交失败，请检查网络连接');
        }
    };

    if (isLoading) {
        return (
            <div className="FeedBack">
                <div className="FeedbackLoading">
                    <h1>Loading...</h1>
                </div>
            </div>
        );
    }

    return (
        <div className="FeedBack">
            {isLogged ? (
                <>
                    <ReturnMainPage />
                    <div className="FeedbackEditor">
                        <h1>Feedback</h1>
                        <textarea
                            value={feedbackContent}
                            onChange={(e) => setFeedbackContent(e.target.value)}
                            placeholder="请输入您的反馈内容..."
                        />
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                </>
            ) : (
                <div className="FeedbackLogin">
                    <h1>Please Log in first.</h1>
                    <div className="ButtonGroup">
                        <button className="Primary" onClick={() => navigate('/login')}>
                            Log in
                        </button>
                        <Link to="/" className="Secondary">
                            Back
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FeedBack;