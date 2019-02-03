import React from 'react';

const UserPage = ({ match }) => {
    const name = match.params.name;
    return (
        <section className="page-user">
            <h1>Hello { name }</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet lacinia velit vel tempus. Maecenas a nisl sed quam laoreet hendrerit eu non ligula. Proin gravida est justo, quis ullamcorper purus volutpat iaculis. Aliquam sed justo purus. Aenean in est vel enim interdum semper non sit amet lectus.</p>
            <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus eu lectus id sem mollis dapibus ut sed sapien. Mauris eu urna mauris. In ac feugiat eros, et rhoncus tellus. Donec id facilisis elit. Suspendisse potenti. Nullam pulvinar rhoncus libero. Ut pretium urna nisi, eget scelerisque mi accumsan in. Vestibulum fermentum nisl vitae ante ultricies, sed tempor dolor condimentum. Nunc convallis finibus lorem tincidunt facilisis. Duis feugiat, turpis quis porttitor mattis, libero tellus blandit justo, et molestie felis elit nec massa.</p>
        </section>
    );
}

export default UserPage;