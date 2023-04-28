import DestinationData from "./DestinationData"
import "./DestinationStyles.css"

const Destination = () => {
    return(
        <div className="destination">
            <h1>Popular Clothes</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>

        <DestinationData
        className="first-desc"
        heading="Underground T-Shirt"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris vitae ultricies leo integer. Id porta nibh venenatis cras. Proin nibh nisl condimentum id venenatis. Magna ac placerat vestibulum lectus mauris ultrices. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Orci a scelerisque purus semper eget duis at tellus. Orci ac auctor augue mauris augue neque gravida in. Pharetra vel turpis nunc eget lorem. Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. A scelerisque purus semper eget duis at tellus at urna. Leo vel fringilla est ullamcorper eget."
        img1="https://images.unsplash.com/photo-1499713907394-43c9d094ac2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=806&q=80"
        img2="https://images.unsplash.com/photo-1631443270442-a7f0af200dc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        />
        <DestinationData
        className="first-desc-reverse"
        heading="Underground Hoddie"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris vitae ultricies leo integer. Id porta nibh venenatis cras. Proin nibh nisl condimentum id venenatis. Magna ac placerat vestibulum lectus mauris ultrices. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Orci a scelerisque purus semper eget duis at tellus. Orci ac auctor augue mauris augue neque gravida in. Pharetra vel turpis nunc eget lorem. Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. A scelerisque purus semper eget duis at tellus at urna. Leo vel fringilla est ullamcorper eget."
        img1="https://images.unsplash.com/photo-1572986339313-6fb01aa14717?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        img2="https://images.unsplash.com/photo-1623201960239-cf1d2b7da25a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
        />
        </div>
    )
}

export default Destination