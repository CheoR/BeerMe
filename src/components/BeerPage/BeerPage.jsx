import React from 'react';

const BeerPage = ({ match }) => {
    /*
      BeerName
      number of reviews - average rating
      beer blurb
      recent reviews (9 reviews max)
        first 5 words of review
        stars by user - username
        [read more] button
      [see allr eviews] button
      form
        add your review [drop down]
        text field
        add [button]

    */
    const name = match.params.name;
    return (
        <section className="page-beer">
            <div className="page-beer__info">
                <h1>{ name } </h1>
                <span>8 reviews (3.5 average rating)</span>
                <div className="blurb">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet lacinia velit vel tempus. Maecenas a nisl sed quam laoreet hendrerit eu non ligula. Proin gravida est justo, quis ullamcorper purus volutpat iaculis. Aliquam sed justo purus. Aenean in est vel enim interdum semper non sit amet lectus.</p>
                </div>
            </div>
            <div className="page-beer__reviews">

            </div>
            <div className="page-beer__add_review">
                <label for="beer-select">Add review:</label><br />
                <select id="beer-select">
                    <option value="">--Select Beer--</option>
                    <option value="dog-beer">Dog Beer</option>
                    <option value="cat-beer">Cat Beer</option>
                    <option value="hamster-beer">Hamster Beer</option>
                    <option value="parrot-beer">Parrot Beer</option>
                    <option value="spider-beer">Spider Beer</option>
                    <option value="goldfish-beer">Goldfish Beer</option>
                </select>

                <form className="beer-review-form" action="#">
                  <textarea name="texArea" id="texArea" cols="30" rows="10" placeholder="Comment"></textarea><br />
                  <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default BeerPage;