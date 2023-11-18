import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import post1 from './post1.webp'
import post2 from './post2.webp'
import post3 from './post3.webp'
import hamok from './hammok.webp'
import bridge  from './bridge.webp'
import house from './house.jpg'
import terrase from './terrase.jpg'
import vip from './vip.webp'

function Post(){
    return(
        <>
        <div class="col d-flex justify-content-center"style={{flexWrap:'wrap'}}>
     <Card style={{ width: '18rem',margin:'10px' }}>
      <Card.Img variant="top" src={post1} />
      <Card.Body>
        <Card.Title>1-Post</Card.Title>
        <Button variant="dark">Discover</Button>
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem' ,margin:'10px'}}>
      <Card.Img variant="top" src={post2} />
      <Card.Body>
        <Card.Title>2-Post</Card.Title>
        <Button variant="dark">Discover</Button>
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem',margin:'10px' }}>
      <Card.Img variant="top" src={post3} />
      <Card.Body>
        <Card.Title>3-Post</Card.Title>
      
        <Button variant="dark">Discover</Button>
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem',margin:'10px' }}>
      <Card.Img variant="top" src={hamok} />
      <Card.Body>
        <Card.Title>With hammock</Card.Title>
      
        <Button variant="dark">Discover</Button>
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem',margin:'10px' }}>
      <Card.Img variant="top" src={bridge} />
      <Card.Body>
        <Card.Title>With bridge</Card.Title>
      
        <Button variant="dark">Discover</Button>
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem',margin:'10px' }}>
      <Card.Img variant="top" src={house} />
      <Card.Body>
        <Card.Title>With house</Card.Title>
      
        <Button variant="dark">Discover</Button>
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem',margin:'10px' }}>
      <Card.Img variant="top" src={terrase} />
      <Card.Body>
        <Card.Title>With terrase/baket</Card.Title>
      
        <Button variant="dark">Discover</Button>
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem',margin:'10px' }}>
      <Card.Img variant="top" src={vip} />
      <Card.Body>
        <Card.Title>VIP</Card.Title>
      
        <Button variant="dark">Discover</Button>
      </Card.Body>
    </Card>
    </div>
        </>
    )
}
export default Post;