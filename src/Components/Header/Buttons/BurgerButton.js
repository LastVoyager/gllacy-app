import './BurgerButton.css';


function BurgerButton  (props) {
  return ( 
      <div className={(props.clicked) ? "burger-strings" : "burger-cross"} onClick={props.onClick}>
          <span></span>
      </div>
  );
};

export default BurgerButton;