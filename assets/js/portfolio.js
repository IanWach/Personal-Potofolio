import { portfolioData} from './portfolioData'
<>
<script src="https://unpkg.com/react@17/umd/react.production.min.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js" crossorigin></script>
</>

/*
    <div class="box">
        <a href="https://miibuddy.com/handy-accessories-for-dogs/" class="image fit"><img src="images/Dog Accessories Cover Image.jpg" alt="" /></a>
        <div class="inner">
            <h3>An Article on Handy Dog Accessories for Miibuddy</h3>
            <p>I was tasked to write an article on the handy dog accessories that are available for the Furry pets (Dogs).</p>
            <a href="https://docs.google.com/document/d/1yuNgjI3MtHOI6fLZI6skhKZYW6zDyjokA-2-SPJ3PdI/edit?usp=sharing" class="button fit" data-poptrox="iframe,1100x600">View Article</a>
        </div>
    </div>
*/

function Portfolio(){
    return(
        <>
            <div class="thumbnails">
                
                {portfolioData.map((Item, index) =>{
                
                    return(
                        <div key={index} className={Item.MainClass}>
                            <a href={Item.Link}><img src={Item.Imag} class={Item.ImageClass}/></a>
                            <div class={Item.InnerClass}>
                                <h3>{Item.Head3}</h3>
                                <p>{Item.Para}</p>
                                <a href={Item.ArticleLink} class={Item.BtnClass} data-poptrox={Item.DataPop}>{Item.LnkName}</a>                  
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default Portfolio


/*
	<div class="thumbnails">
							<script>
								function Portfolio (){
									return(
										<>
											{portfolioData.map((Item, index) =>{
												return(
													<div key={index} className={Item.MainClass}>
														<a href={Item.Link}><img src={Item.Imag} class={Item.ImageClass}/></a>
														<div class={Item.InnerClass}>
															<h3>{Item.Head3}</h3>
															<p>{Item.Para}</p>
															<a href={Item.ArticleLink} class={Item.BtnClass} data-poptrox={Item.DataPop}>{Item.LnkName}</a>                  
														</div>
													</div>
												)
											})}
										</>
									)
								}
							</script>
						</div>
*/


/*
<script>
								import React from "react";
								
								function Portfolio(){
									return(

										<div class="thumbnails">
											
											{portfolioData.map((Item, index) =>{
											
												return(
													<div key={index} className={Item.MainClass}>
														<a href={Item.Link}><img src={Item.Imag} class={Item.ImageClass}/></a>
														<div class={Item.InnerClass}>
															<h3>{Item.Head3}</h3>
															<p>{Item.Para}</p>
															<a href={Item.ArticleLink} class={Item.BtnClass} data-poptrox={Item.DataPop}>{Item.LnkName}</a>                  
														</div>
													</div>
												)
											})}
										</div>
									)
								}
								Portfolio();
							</script>
*/