import "./TripStyles.css"
import TripData from "./TripData";

function Trip(){
    return(
        <div className="trip">
            <h1>Recently Bought Clothes</h1>
            <p>Massa tincidunt dui ut ornare lectus sit amet est</p>
        <div className="tripcard">
            <TripData
            image="https://images.unsplash.com/photo-1594035795519-19274ae37f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            heading = "Creation Street"
            text="Mattis pellentesque id nibh tortor id aliquet lectus proin. Volutpat consequat mauris nunc congue nisi vitae suscipit. Morbi leo urna molestie at. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Gravida quis blandit turpis cursus. Cras fermentum odio eu feugiat. Nulla facilisi cras fermentum odio eu feugiat pretium."
            />
            <TripData
            image="https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            heading = "Minimalist Wear"
            text="Mattis pellentesque id nibh tortor id aliquet lectus proin. Volutpat consequat mauris nunc congue nisi vitae suscipit. Morbi leo urna molestie at. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Gravida quis blandit turpis cursus. Cras fermentum odio eu feugiat. Nulla facilisi cras fermentum odio eu feugiat pretium."
            />
            <TripData
            image="https://images.unsplash.com/photo-1508853363419-a9263d752c59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            heading = "Hoddie Inversion"
            text="Mattis pellentesque id nibh tortor id aliquet lectus proin. Volutpat consequat mauris nunc congue nisi vitae suscipit. Morbi leo urna molestie at. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Gravida quis blandit turpis cursus. Cras fermentum odio eu feugiat. Nulla facilisi cras fermentum odio eu feugiat pretium."
            />
        </div>
        </div>

    );
}

export default Trip;