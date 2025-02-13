// import logo from './logo.svg';
import './App.css';

const user = {
  name:'malik',
  age: 12,
  job: 'Web dev',
  imageUrls:"https://i.pinimg.com/736x/fb/55/fe/fb55feab5bccaa975027d7475cf1f49b.jpg",
  imageSize: 90
}

function App() {
  return (
    <>
    <div>
      <img src={user.imageUrls} alt="" srcset="" />
    </div>
    </>
  );
}

export default App;
