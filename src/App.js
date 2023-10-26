import Structure from './containers/Structure/Structure'
import Instances from './containers/Instances/Instances'
import ListWithStateOnTheList from './containers/ListWithStateOnTheList/ListWithStateOnTheList';
import ListWithoutStateOnTheList from './containers/ListWithoutStateOnTheList/ListWithoutStateOnTheList';
import Half from './components/Half/Half';
import Container from './components/Container/Container';


export default function App() {
  return (
    <div>
      <header><h2>Worst Practice in React</h2></header>
      <main>
        {/* <Structure /> */}


        {/* <Instances /> */}


        {/*
          You might not have to use state to update inputs anymore in React but if you want 
          the inputs populated with previous values from a database it's still required.        
          
          Use the "Console" in the "developer tool" to see the difference in the following example
        */}

        <Container display='flex'>
          <Half>
            <ListWithStateOnTheList />
          </Half>
          <Half>
            <ListWithoutStateOnTheList />
          </Half>
        </Container>
      </main>
    </div>
  );
}