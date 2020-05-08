import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <section id="price">
				<div className="container">
					<div className="row">
					
						<div className="sec-title text-center wow animated fadeInDown">
							<h2>Suscribe to one or more membership</h2>
							<p>Share our workspace at a pretty low price.</p>
						</div>
						
						<div className="col-md-4 wow animated fadeInUp">
							<div className="price-table text-center">
								<span>Bronze</span>
								<div className="value">
									<span>USD</span>
									<span>400</span><br/>
									<span>month</span>
								</div>
								<ul>
									<li>Internet</li>
									<li>1 person space</li>
									<li>Office access</li>
									<li>1 static website</li>
									<li>6 indoor meeting</li>
									<li>1 outdoor meeting</li>
									<li><a href="#">JOIN</a></li>
								</ul>
							</div>
						</div>
						
						<div className="col-md-4 wow animated fadeInUp" data-wow-delay="0.4s">
							<div className="price-table featured text-center">
								<span>Silver</span>
								<div className="value">
									<span>USD</span>
									<span>600</span><br/>
									<span>month</span>
								</div>
								<ul>
									<li>Internet</li>
									<li>2 persons space</li>
									<li>Office access+</li>
									<li>2 static website</li>
									<li>8 indoor meetings</li>
									<li>2 outdoor meetings</li>
									<li><a href="#">JOIN</a></li>
								</ul>
							</div>
						</div>
						
						<div className="col-md-4 wow animated fadeInUp" data-wow-delay="0.8s">
							<div className="price-table text-center">
								<span>Gold</span>
								<div className="value">
									<span>USD</span>
									<span>1000</span><br/>
									<span>month</span>
								</div>
								<ul>
									<li>Internet</li>
									<li>3 persons space</li>
									<li>Office access+</li>
									<li>4 static website</li>
									<li>16 indoor meetings</li>
									<li>3 outdoor meetings</li>
									<li><a href="#">JOIN</a></li>
								</ul>
							</div>
						</div>
					
					</div>
				</div>
			</section>
    </div>
  );
}

export default App;