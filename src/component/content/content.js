import React from 'react';
import "./content.css";


class Content extends React.Component {
	render() {

		return (

			<div className="container">
				<main className="content">
					<section className="content__followers">
						<div className="followers">
							<div className="followers-bar facebook-bg"></div>
							<div className="followers__header">
								<i className="header-icon fab fa-facebook-square facebook-color"></i>
								<p className="header-username" id="fb_name">@PieroMerino3</p>
							</div>
							<div className="followers__main">
								<strong className="main-quantity" id="fb_followers">1987</strong>
								<span>FOLLOWERS</span>
							</div>
							<div className="followers__footer">
								<i class="fas fa-caret-up"></i>
								<p className="footer-count up" id="fb_followers_count">52 Today</p>

							</div>
						</div>

						<div className="followers">
							<div className="followers-bar twitter-bg"></div>
							<div className="followers__header">
								<i className="header-icon fab fa-twitter twitter-color"></i>
								<p className="header-username" id="tw_name">@PieroMerino3</p>
							</div>
							<div className="followers__main">
								<strong className="main-quantity" id="tw_followers">1987</strong>
								<span>FOLLOWERS</span>
							</div>
							<div className="followers__footer">

								<i class="fas fa-caret-up"></i>
								<p className="footer-count up" id="tw_followers_count">52 Today</p>
							</div>
						</div>

						<div className="followers">
							<div className="followers-bar instagram-bg"></div>
							<div className="followers__header">
								<i className="header-icon fab fa-instagram instagram-color"></i>
								<p className="header-username" id="in_name">@PieroMerino3</p>
							</div>
							<div className="followers__main">
								<strong className="main-quantity" id="in_followers">1987</strong>
								<span>FOLLOWERS</span>
							</div>
							<div className="followers__footer">
								<i class="fas fa-caret-up"></i>
								<p className="footer-count up" id="in_followers_count">80 Today</p>
							</div>
						</div>

						<div className="followers">
							<div className="followers-bar youtube-bg"></div>
							<div className="followers__header">
								<i className="header-icon fab fa-youtube youtube-color"></i>
								<p className="header-username" id="yt_name">@PieroMerino3</p>
							</div>
							<div className="followers__main">
								<strong className="main-quantity" id="yt_followers">1987</strong>
								<span>SUBSCRIBERS</span>
							</div>
							<div className="followers__footer">
								<i class="fas fa-caret-down"></i>
								<p className="footer-count down" id="yt_followers_count">12 Today</p>
							</div>
						</div>
					</section>

					<section className="content__today">
						<h2 className="today-title">Overview - Today</h2>

						<div class="today-card">
							<div className="card">
								<span class="card-title">Page Views</span>
								<i class="card-icon fab fa-facebook-square facebook-color"></i>
							</div>

							<div className="card">
								<strong class="card-number" id="fb_page_views">87</strong>
								<div class="card-stats">
									<i class="fas fa-caret-up"></i>
									<span class="stats-count up">8%</span>
								</div>
							</div>

						</div>

						<div class="today-card">
							<div className="card">
								<span class="card-title">Likes</span>
								<i class="card-icon fab fa-facebook-square facebook-color"></i>
							</div>

							<div className="card">
								<strong class="card-number" id="fb_likes">87</strong>
								<div class="card-stats">
									<i class="fas fa-caret-down"></i>
									<span class="stats-count down">5%</span>
								</div>
							</div>

						</div>

						<div class="today-card">
							<div className="card">
								<span class="card-title">Likes</span>
								<i class="card-icon fab fa-instagram instagram-color"></i>
							</div>

							<div className="card">
								<strong class="card-number" id="in_likes">87</strong>
								<div class="card-stats">
									<i class="fas fa-caret-up"></i>
									<span class="stats-count up">2%</span>
								</div>
							</div>

						</div>

						<div class="today-card">
							<div className="card">
								<span class="card-title">Profile Views</span>
								<i class="card-icon fab fa-instagram instagram-color"></i>
							</div>

							<div className="card">
								<strong class="card-number" id="in_profile_views">87</strong>
								<div class="card-stats">
									<i class="fas fa-caret-down"></i>
									<span class="stats-count down">15%</span>
								</div>
							</div>

						</div>

						<div class="today-card">
							<div className="card">
								<span class="card-title">Retweets</span>
								<i class="card-icon fab fa-twitter twitter-color"></i>
							</div>

							<div className="card">
								<strong class="card-number" id="tw_retweets">87</strong>
								<div class="card-stats">
									<i class="fas fa-caret-down"></i>
									<span class="stats-count down">10%</span>
								</div>
							</div>

						</div>

						<div class="today-card">
							<div className="card">
								<span class="card-title">Likes</span>
								<i class="card-icon fab fa-twitter twitter-color"></i>
							</div>

							<div className="card">
								<strong class="card-number" id="tw_likes">87</strong>
								<div class="card-stats">
									<i class="fas fa-caret-down"></i>
									<span class="stats-count down">4%</span>
								</div>
							</div>

						</div>

						<div class="today-card">
							<div className="card">
								<span class="card-title">Likes</span>
								<i class="card-icon fab fa-youtube youtube-color"></i>
							</div>

							<div className="card">
								<strong class="card-number" id="yt_likes">87</strong>
								<div class="card-stats">
									<i class="fas fa-caret-down"></i>
									<span class="stats-count down">3%</span>
								</div>
							</div>

						</div>

						<div class="today-card">
							<div className="card">
								<span class="card-title">Total Views</span>
								<i class="card-icon fab fa-youtube youtube-color"></i>
							</div>

							<div className="card">
								<strong class="card-number" id="yt_total_views">87</strong>
								<div class="card-stats">
									<i class="fas fa-caret-up"></i>
									<span class="stats-count up">12%</span>
								</div>
							</div>

						</div>

					</section>
				</main>
			</div>
		);
	}
}

export default Content;