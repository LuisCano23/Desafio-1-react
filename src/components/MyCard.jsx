import Card from 'react-bootstrap/Card';
import Tag from './Tags';

const MyCard = ({ image, title, tagColor, tagText, paragraph }) => {
    return (
        <>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={image} className='imgCard'/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <p>{paragraph}</p>
                    <Tag tagColor={tagColor} tagText={tagText} />
                </Card.Body>
            </Card>
        </>
    );
};
export default MyCard;
