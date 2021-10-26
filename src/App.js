import { useEffect, useState } from 'react';
import ArticlesList from './components/ArticlesList/ArticlesList';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(() => (
      [
        {
          "source": {
            "id": null,
            "name": "Blogspot.com"
          },
          "author": "noreply@blogger.com (Unknown)",
          "title": "15 Best Swashbuckling Pirate Movies, According To Rotten Tomatoes",
          "description": "Aye, Mateys! Time to sail the seven seas and search for adventure with these classic pirate movies. The life of a pirate is a life of freedom, danger, and debauchery that make for perfect entertainment. Pirate films are fun and exciting adventure movies that …",
          "url": "https://techncruncher.blogspot.com/2021/10/15-best-swashbuckling-pirate-movies.html",
          "urlToImage": "https://lh4.googleusercontent.com/proxy/BnWu3--FwAzbdOcLv0o3sb8bb7N33mzUpRq2nR6GPLYG2KHSFTu_7cuZlKhOHVP_znYhkev58UUnxUB_QkM5A31-Yy23IfZZkXBoUsZWpcYPFy6nYKzSOmlrpnMq7EeyUkUZ1VBxLLdqMiyxUQEM_0Qh3eJc=w1200-h630-p-k-no-nu",
          "publishedAt": "2021-10-07T19:40:00Z",
          "content": "Aye, Mateys! Time to sail the seven seas and search for adventure with these classic pirate movies. The life of a pirate is a life of freedom, danger, and debauchery that make for perfect entertainme… [+11702 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Blogspot.com"
          },
          "author": "noreply@blogger.com (Unknown)",
          "title": "10 New & Upcoming Horror Movies To Stream Before Halloween",
          "description": "As Halloween fast approaches, several highly anticipated new horror movies are set to hit both the theatrical and VOD circuits between now and October 31st. Acclaimed genre filmmakers such as James Wan, Edgar Wright, David Gordon Green, Patrick Brice, Scott C…",
          "url": "https://techncruncher.blogspot.com/2021/10/10-new-upcoming-horror-movies-to-stream.html",
          "urlToImage": "https://lh4.googleusercontent.com/proxy/xHCRKpj2c7OOzS0vu-Ns99MZtWPjchKgGRgoA0X1eD7j9L3SQyNOY3MX0pbZdidzBTb7jdFcGVOHUK36GtzAbWsC3FkxaJqLtHgyFhycvXq3bzu2v922CvoF0qgS3r-w4wyB0uEsW058ArOImFol4uTx3qbAcS_nd99IG15IHSBrw47SoHjsFAmNttEQQuMqrfkh=w1200-h630-p-k-no-nu",
          "publishedAt": "2021-10-09T19:54:00Z",
          "content": "As Halloween fast approaches, several highly anticipated new horror movies are set to hit both the theatrical and VOD circuits between now and October 31st. Acclaimed genre filmmakers such as James W… [+6869 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Blogspot.com"
          },
          "author": "noreply@blogger.com (Unknown)",
          "title": "9 Best Seth Rogen & Evan Goldberg Movies, Ranked By IMDb",
          "description": "Ever since the instant classic high school comedy Superbad put them on the map and the subsequent release of action-packed buddy picture Pineapple Express proved they weren’t one-trick ponies, Seth Rogen and Evan Goldberg have been two of the most prolific an…",
          "url": "https://techncruncher.blogspot.com/2021/10/9-best-seth-rogen-evan-goldberg-movies.html",
          "urlToImage": "https://lh6.googleusercontent.com/proxy/DkKMhZCGLlFRhSvZTql-S4p3hkUE5KNanawQKtwdzuxCaYat5QfZLBWsSA6tv2F_CrC5spUbfdyWMS_z_NMCi3byp4npGZc200upKal5e9xofNq6dVc7xE91mE1178Y654zCn9FoKdcsGtJgLQrp0jxgbleBUPhKMGwIzNVkKciya7MT6ilpEtnjQyU=w1200-h630-p-k-no-nu",
          "publishedAt": "2021-10-17T19:02:00Z",
          "content": "Ever since the instant classic high school comedy Superbad put them on the map and the subsequent release of action-packed buddy picture Pineapple Express proved they weren’t one-trick ponies, Seth R… [+5537 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Blogspot.com"
          },
          "author": "noreply@blogger.com (Unknown)",
          "title": "8 Bradley Cooper Produced Movies, Ranked According To IMDB",
          "description": "Many actors have taken up producing at one point or another, whether it's their own passion project or something they've simply invested money in. More often than not, actors then get a taste for it, producing more and more. Such is seemingly the case with Br…",
          "url": "https://techncruncher.blogspot.com/2021/10/8-bradley-cooper-produced-movies-ranked.html",
          "urlToImage": "https://lh4.googleusercontent.com/proxy/NoA--IKVYnGtzaW76ivwL0AHZ95T0TcVZ6Mem9HR8K7QmKCo0wvWp_XQBKu9h8s6T8CH7WrgCV70euOVJofE6A2kQQjrdDfZDXI6xQj8DoeQ_tmU8VGP9d0us0KfewK5OsthPdMtnTA3Fx15qnNG_ASolSEf_AKD5E_EdsQ=w1200-h630-p-k-no-nu",
          "publishedAt": "2021-10-04T19:40:00Z",
          "content": "Many actors have taken up producing at one point or another, whether it's their own passion project or something they've simply invested money in. More often than not, actors then get a taste for it,… [+6186 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Gizmodo.com"
          },
          "author": "Cheryl Eddy",
          "title": "All 12 Halloween Movies (So Far), Ranked",
          "description": "We are more than ready for an early Halloween this year, and what better way to prepare than by ranking all of the movies (so far) spawned by John Carpenter’s 1978 slasher masterpiece? Read more...",
          "url": "https://gizmodo.com/all-12-halloween-movies-so-far-ranked-1844955882",
          "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/njdhlamxqmmukou5mpcb.jpg",
          "publishedAt": "2021-10-18T21:44:00Z",
          "content": "The original Halloween is an exercise in minimalism. These two remakes by Rob Zombie, a huge fan of the more-is-more approach, are not. They are noisier, more casually brutal, filled with characters … [+1211 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "New York Times"
          },
          "author": "Jameson Rich",
          "title": "Do the Memes Help the Movies?",
          "description": "The internet is offering strange new ways for scenes from movies to become iconic.",
          "url": "https://www.nytimes.com/2021/10/13/magazine/movie-memes.html",
          "urlToImage": "https://static01.nyt.com/images/2021/10/17/magazine/17Mag-Screenland-01/17Mag-Screenland-01-facebookJumbo-v2.jpg",
          "publishedAt": "2021-10-13T09:00:05Z",
          "content": "A good example is the scene from Marriage Story (2019) in which the films central couple have a screaming match. When a clip arrived online, it mostly sparked arguments over whether the acting was an… [+2968 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "New York Times"
          },
          "author": "Kara Swisher",
          "title": "Can Hollywood Adapt to Streaming?",
          "description": "More of us are watching movies at home. Will Hollywood ever adapt?",
          "url": "https://www.nytimes.com/2021/10/12/opinion/streaming-pandemic-nondisclosure.html",
          "urlToImage": "https://static01.nyt.com/images/2021/10/12/opinion/12Swisher-image/12Swisher-image-facebookJumbo.jpg",
          "publishedAt": "2021-10-13T00:26:04Z",
          "content": "When it comes to entertainment, viewers are increasingly using a range of digital tools, from mobile phones to large televisions with on-demand service, that dont include movie theaters. My own teen … [+2650 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Blogspot.com"
          },
          "author": "noreply@blogger.com (Unknown)",
          "title": "Apple TV+ Guide: Here are all the Apple TV shows and movies available now",
          "description": "Apple TV+ offers exclusive Apple original TV shows and movies in 4K HDR quality. You can watch across all of your screens and pick up where you left off on any device. Apple TV+ costs $4.99 per month. Here’s every Apple original television show and movie avai…",
          "url": "https://techncruncher.blogspot.com/2021/09/apple-tv-guide-here-are-all-apple-tv.html",
          "urlToImage": "https://lh3.googleusercontent.com/proxy/8WaPn-C1Xe_kq7iBnw2TDYEE7ASklDUJrBYxOsRQ924O9LtWEbVp2AyepKCFCSfJYqNPT0XYrtLsV5nXjFliPZwb2NEFXLp-pNoIm9XQJ7DodHF4iOarjuH-7DSCZhjpdyHyjDBGwPjXRO6T2rMvImlvMOdfFFmQ=w1200-h630-p-k-no-nu",
          "publishedAt": "2021-09-30T10:35:00Z",
          "content": "Apple TV+ offers exclusive Apple original TV shows and movies in 4K HDR quality. You can watch across all of your screens and pick up where you left off on any device. Apple TV+ costs $4.99 per month… [+291 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Blogspot.com"
          },
          "author": "noreply@blogger.com (Unknown)",
          "title": "Where Each Netflix Defender Could Return In Upcoming MCU Movies & Shows",
          "description": "Netflix's Defenders characters could be joining the Marvel Cinematic Universe at last and may feature in a number of different shows and feature films. Back when the MCU was truly taking off after The Avengers, Marvel TV and Netflix joined forces to create mu…",
          "url": "https://techncruncher.blogspot.com/2021/10/where-each-netflix-defender-could.html",
          "urlToImage": "https://lh5.googleusercontent.com/proxy/5b-_NMgxtZJQz-a-F8cxkFLFiqn2VTKwJRntXZ-aFoNYop6KVVEC9gXJlWgRIrHT45AlAzsTYZS14FCWnwSjy-jIHG_b2plXjkPE8CMbrV3NpZfBc6lgRre8NfR_CTXAQQxx3A8csnTbdYBScduBH4vteFIg9l4jrTvNgvtEYdRG4Q=w1200-h630-p-k-no-nu",
          "publishedAt": "2021-10-10T19:30:00Z",
          "content": "Netflix's Defenders characters could be joining the Marvel Cinematic Universe at last and may feature in a number of different shows and feature films. Back when the MCU was truly taking off after Th… [+9217 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Blogspot.com"
          },
          "author": "noreply@blogger.com (Unknown)",
          "title": "Why So Many MCU 2021 Movies & Shows Are Fixing Age of Ultron",
          "description": "The MCU has entered Phase 4 in 2021, and many of its movies and shows have spent time fixing mistakes made in Avengers: Age of Ultron. 2015’s Age of Ultron served as the partial conclusion to the MCU’s Phase 2, and though the film was a financial success, it …",
          "url": "https://techncruncher.blogspot.com/2021/10/why-so-many-mcu-2021-movies-shows-are.html",
          "urlToImage": "https://lh6.googleusercontent.com/proxy/rmxziWJB1glKHmZAOOVsdiCw9LgcG6ex5XP3WPb95bLPPBbC2ZOuwSv2BZ66K5W3CA9Si0BbMfVMnxpZvJMvCtWqgOBlkYdgd1Gqb17p1E7rZI5xkgmfETT-_JuynEtUnuB25-TwV4A1sSxRY6XmyXlnipn4u2I9bf9oOQl-SYpbZPzVsDL-z0sYnDv-uOPCEislLwcI_hm525kZveLVBa0=w1200-h630-p-k-no-nu",
          "publishedAt": "2021-10-03T20:01:00Z",
          "content": "The MCU has entered Phase 4 in 2021, and many of its movies and shows have spent time fixing mistakes made in Avengers: Age of Ultron. 2015’s Age of Ultron served as the partial conclusion to the MCU… [+6128 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Blogspot.com"
          },
          "author": "noreply@blogger.com (Unknown)",
          "title": "10 Times Late Night Talk Show Hosts Did Not Play Themselves In Movies",
          "description": "Every late-night talk show host has, at one point or another, made a cameo in a television show or movie as themselves. They are often seen interviewing guests as if their characters were real and not the actors who play them. In one recent small screen insta…",
          "url": "https://techncruncher.blogspot.com/2021/10/10-times-late-night-talk-show-hosts-did.html",
          "urlToImage": "https://lh3.googleusercontent.com/proxy/qxOyy_k4b1JYILutFml37xltclfVsWBUBGLrjWJep9TEmO7eo8T7zn78wp61uOZ6OZ-BAtxmMxjVJyuDw4CzWW1wK1IaOgp5SDfOhN5t3t0UBxII8pp4J3PezBw_i_nu7bH0TU2htLiqsv3KhdIf=w1200-h630-p-k-no-nu",
          "publishedAt": "2021-10-08T20:37:00Z",
          "content": "Every late-night talk show host has, at one point or another, made a cameo in a television show or movie as themselves. They are often seen interviewing guests as if their characters were real and no… [+7332 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Blogspot.com"
          },
          "author": "noreply@blogger.com (Unknown)",
          "title": "A Nightmare On Elm Street: 9 Unpopular Opinions About The Movies, According To Reddit",
          "description": "Considering the A Nightmare on Elm Street franchise has had nine installments, it's not surprising to learn that there are some unpopular opinions out there about the series. The remake, the sequels, Freddy's clash with Jason, and even the original movie, eac…",
          "url": "https://techncruncher.blogspot.com/2021/10/a-nightmare-on-elm-street-9-unpopular.html",
          "urlToImage": "https://lh5.googleusercontent.com/proxy/PjpMPfCoiRztQSfjGU_wywxcjlh3ZJMO36zsc_Oua1HqYiL8ycLI43XCzZg6CltOcQlT1WnKWkzGEbWx0Ww5QlLNawlYSpXKmBZ1EiIiP4pwBEsM3zySMQJTGMaYBKC5IAEI8jz8fz8_vKE3tgY7X_MKlgZeqyec1X-gOg=w1200-h630-p-k-no-nu",
          "publishedAt": "2021-10-05T21:40:00Z",
          "content": "Considering the A Nightmare on Elm Street franchise has had nine installments, it's not surprising to learn that there are some unpopular opinions out there about the series. The remake, the sequels,… [+7297 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "New York Times"
          },
          "author": "Noel Murray",
          "title": "Loved ‘Squid Game’? Watch These TV Shows and Movies Next.",
          "description": "Here are six series and films you can stream that share the Netflix hit’s dystopian themes and social commentary.",
          "url": "https://www.nytimes.com/2021/10/06/arts/television/squid-game-streaming.html",
          "urlToImage": "https://static01.nyt.com/images/2021/10/06/arts/06squid/06squid-facebookJumbo.jpg",
          "publishedAt": "2021-10-06T16:06:00Z",
          "content": "The Korean TV series Squid Game has been a sensation since it debuted on Netflix in September. The twisty thriller about an assortment of desperate debtors who risk their lives in a series of superch… [+848 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "New York Times"
          },
          "author": "Lisa Selin Davis",
          "title": "TV and Movies Are Finally Celebrating Older Women",
          "description": "Until quite recently, anything past age 40 was considered ancient in Hollywood years. At long last, that’s starting to change.",
          "url": "https://www.nytimes.com/2021/09/30/us/tv-movies-hollywood-women.html",
          "urlToImage": "https://static01.nyt.com/images/2021/09/28/us/IHW-Olderwomen/IHW-Olderwoman-facebookJumbo.jpg",
          "publishedAt": "2021-10-01T02:18:54Z",
          "content": "A report from the Geena Davis Institute on Gender and Media concluded that even now, there is a dearth of roles for older actresses, and the roles that do exist portray them as senile, homebound, fee… [+3106 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "New York Times"
          },
          "author": "Neil Genzlinger",
          "title": "Tommy Kirk, Young Star of ‘Old Yeller,’ Is Dead at 79",
          "description": "For a time, he was a Disney regular, seen in movies like “Swiss Family Robinson” and “The Shaggy Dog.” But his career derailed.",
          "url": "https://www.nytimes.com/2021/10/01/arts/tommy-kirk-dead.html",
          "urlToImage": "https://static01.nyt.com/images/2021/10/02/obituaries/02tkirk-obit1/30tkirk1-facebookJumbo.jpg",
          "publishedAt": "2021-10-01T22:23:47Z",
          "content": "Tommy Kirk, who was a busy star in the Disney universe as a child and young man, appearing in Old Yeller, The Shaggy Dog, Swiss Family Robinson and other movies in the late 1950s and early 60s, but w… [+1165 chars]"
        },
        {
          "source": {
            "id": "engadget",
            "name": "Engadget"
          },
          "author": "Mat Smith",
          "title": "Sony looks set to unveil the A7 IV mirrorless camera on October 21st",
          "description": "Sony has teased the launch of a new Alpha camera on October 21st at 10AM ET, and judging from the YouTube metadata, it appears to be the long-awaited full-frame A7 IV mirrorless model, DPReview has reported. And while Sony didn't reveal any information in the…",
          "url": "https://www.engadget.com/sony-is-announcing-a-new-camera-on-october-21st-likely-the-a-7-iv-085021205.html",
          "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-10/5ddcf110-30b4-11ec-b7cf-c1fd1adaf065",
          "publishedAt": "2021-10-19T08:50:21Z",
          "content": "Sony has teased the launch of a new Alpha camera on October 21st at 10AM ET, and judging from the YouTube metadata, it appears to be the long-awaited full-frame A7 IV mirrorless model, DPReview has r… [+1130 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "New York Times"
          },
          "author": "Neil Genzlinger",
          "title": "Sue Thompson, Who Sang of ‘Norman’ and Sad Movies, Dies at 96",
          "description": "She started out a country singer, but she found fame and pop-chart success in the early 1960s with catchy novelty songs, as well as the occasional ballad.",
          "url": "https://www.nytimes.com/2021/09/28/arts/music/sue-thompson-dead.html",
          "urlToImage": "https://static01.nyt.com/images/2021/09/29/obituaries/28thompson1-print1/28thompson1-facebookJumbo.jpg",
          "publishedAt": "2021-09-28T22:05:35Z",
          "content": "Her wartime marriage ended in divorce in 1947, but her singing career soon began in earnest. Ms. Thompson won a talent show at a San Jose theater, which led to appearances on local radio and televisi… [+1400 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Blogspot.com"
          },
          "author": "noreply@blogger.com (Unknown)",
          "title": "007: 7 Directors Who Almost Helmed A Bond Movie (& 8 Who Should)",
          "description": "The most important hire in the making of a James Bond movie is the casting of 007 himself, but the second most important is choosing a director. To pull off a great Bond movie, a filmmaker needs to have a fundamental understanding of what makes the character …",
          "url": "https://techncruncher.blogspot.com/2021/10/007-7-directors-who-almost-helmed-bond.html",
          "urlToImage": "https://lh3.googleusercontent.com/proxy/KPCr5yvbjO3Sf1VwS5_gd-49gin4TQUw-tBHzuakta7ZPaq9BiCbj8jfjQLHcUAvodqQS7-ONVh46SqTShFXDGMOm1Am2BV_ie5zIQ17P4V-kQCw1kI5D512ejvhvyOx1U1NsMKAbcxhJ5NrKPQ8tADe2Tugeh4ffSjkSXwqurNT7kqdKwODB00=w1200-h630-p-k-no-nu",
          "publishedAt": "2021-10-09T19:40:00Z",
          "content": "The most important hire in the making of a James Bond movie is the casting of 007 himself, but the second most important is choosing a director. To pull off a great Bond movie, a filmmaker needs to h… [+8187 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Gizmodo.com"
          },
          "author": "Andrew Liszewski",
          "title": "This $2,500 Short-Throw 4K Laser Projector Is All About the Trade-Offs",
          "description": "Until this whole pandemic thing is officially over, going to the movies will never be completely safe, so it’s as good a time as any to upgrade your home theater. Projectors are cheaper and more capable than ever, but there are some tough decisions to make, a…",
          "url": "https://gizmodo.com/this-2-500-short-throw-4k-laser-projector-is-all-about-1847708190",
          "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/eb3f076b4b5b9822b743114f605b14ab.jpg",
          "publishedAt": "2021-10-12T13:00:00Z",
          "content": "Until this whole pandemic thing is officially over, going to the movies will never be completely safe, so its as good a time as any to upgrade your home theater. Projectors are cheaper and more capab… [+11012 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Gizmodo.com"
          },
          "author": "Matt Novak",
          "title": "Kino Lorber Launches Free Movie Streaming Service With Dozens of Cult Classics",
          "description": "Film distributor Kino Lorber is launching a movie streaming service today called Kino Cult, with dozens of genre movies just in time for the spooky season. The service is completely free and supported by ads, with new titles promised each month.Read more...",
          "url": "https://gizmodo.com/kino-lorber-launches-free-movie-streaming-service-with-1847780280",
          "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/2bc7e1877c428c6f43d59aecbf248a56.png",
          "publishedAt": "2021-10-01T10:30:00Z",
          "content": "Film distributor Kino Lorber is launching a movie streaming service today called Kino Cult, with dozens of genre movies just in time for the spooky season. The service is completely free and supporte… [+1865 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Gizmodo.com"
          },
          "author": "Rob Bricken",
          "title": "The Batman Trailer Works Shockingly Well With The Animated Series Footage",
          "description": "A lot of nerds try to mash-up superhero movie trailers with footage from other movies, shows, cartoons, etc., and a lot of nerds fail. Either the creator doesn’t have the patience to truly hunt down the perfect footage, or the source material doesn’t work bec…",
          "url": "https://gizmodo.com/the-batman-trailer-works-shockingly-well-with-the-anima-1847900488",
          "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/28aa68b40a47e959c1e887ba08c24da2.jpg",
          "publishedAt": "2021-10-20T16:20:00Z",
          "content": "A lot of nerds try to mash-up superhero movie trailers with footage from other movies, shows, cartoons, etc., and a lot of nerds fail. Either the creator doesnt have the patience to truly hunt down t… [+1658 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Blogspot.com"
          },
          "author": "noreply@blogger.com (Unknown)",
          "title": "Why James Bond Is So Popular After 60 Years",
          "description": "With No Time To Die already a blockbuster at the global box office, James Bond continues to be incredibly popular after 60 years. Created by Ian Fleming, who wrote 15 novels and several short stories about secret agent 007, James Bond was already well-known w…",
          "url": "https://techncruncher.blogspot.com/2021/10/why-james-bond-is-so-popular-after-60.html",
          "urlToImage": "https://lh6.googleusercontent.com/proxy/V9-Dc6V90aCr53b7i9gtcizUsHBnfDm3axkjFUYJA6A5HRLOc_1gRqB1b7jksM2c7jG5LUVz1P7ZNKQyOjECiFvMM7u9FSMr00Zha21JZnqb8_eiMxb9y-jKOo7CVw_aT_9UqmwsB0N86jVSVsdsCbGoBCu69x0gv413jOxKBWA=w1200-h630-p-k-no-nu",
          "publishedAt": "2021-10-06T20:13:00Z",
          "content": "With No Time To Die already a blockbuster at the global box office, James Bond continues to be incredibly popular after 60 years. Created by Ian Fleming, who wrote 15 novels and several short stories… [+8324 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Blogspot.com"
          },
          "author": "noreply@blogger.com (Unknown)",
          "title": "10 Best Slasher Movie Costumes Of All Time, Ranked | ScreenRant",
          "description": "When creating an iconic horror villain who always seems to cheat death, one of the biggest things to consider is how they will look. A classic horror villain needs the right look to be intimidating and strike fear into the hearts of their victims. A mask and …",
          "url": "https://techncruncher.blogspot.com/2021/10/10-best-slasher-movie-costumes-of-all.html",
          "urlToImage": "https://lh4.googleusercontent.com/proxy/1rRFHLAceIVqJIfCW3fpRiqtHOZwZQKSEKaI_A6QaLetJvzzvcAAHc3hNKda7u7OE0qZKU_nhnCcPwa-r7JgmB1nJlFdmN7iCG__fnpa6va8AhQgiaQ9te357GGXOnyW32ccfQm4kjYKBWrgIIypyDoBfco-OzfVMW5BP1O0SwcZYSx3kA=w1200-h630-p-k-no-nu",
          "publishedAt": "2021-10-04T21:40:00Z",
          "content": "When creating an iconic horror villain who always seems to cheat death, one of the biggest things to consider is how they will look. A classic horror villain needs the right look to be intimidating a… [+7148 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Blogspot.com"
          },
          "author": "noreply@blogger.com (Unknown)",
          "title": "xXx 4 Should Borrow From Fast & Furious And Introduce Xander Cage's Family",
          "description": "If xXx 4 wants to evolve the series, it should take a page out of The Fast And The Furious playbook and bring in some of Xander Cage's family. The original xXx was custom built for Vin Diesel as a star vehicle, following the surprise success of 2001's The Fas…",
          "url": "https://techncruncher.blogspot.com/2021/10/xxx-4-should-borrow-from-fast-furious.html",
          "urlToImage": "https://lh4.googleusercontent.com/proxy/FuNj66i03y32e6lgijWa_31yarKvn9CWj7_kCwHfiZ5OlNDv-5PMaWqKZ2Y15AFif-QmtyTw8KyeLYVuCz9RG-i-TzPW31_7wInnEELTrPNpRhBpB5oTVjecvftQRp0LUIqcGDx2DkWHWqfRB0FP01NRLCFIEejFb7R3K5XN3_vCem_OXg=w1200-h630-p-k-no-nu",
          "publishedAt": "2021-10-10T20:40:00Z",
          "content": "If xXx 4 wants to evolve the series, it should take a page out of The Fast And The Furious playbook and bring in some of Xander Cage's family. The original xXx was custom built for Vin Diesel as a st… [+2467 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Blogspot.com"
          },
          "author": "noreply@blogger.com (Unknown)",
          "title": "James Gunn Pitched A Gilligan’s Island Movie With A Cannibal Twist",
          "description": "The Suicide Squad director James Gunn says he once pitched a movie of Gilligan’s Island with a cannibal twist. The original show about a group of castaways becoming stranded on a desert island during what was supposed to be just a three-hour-tour aired on CBS…",
          "url": "https://techncruncher.blogspot.com/2021/10/james-gunn-pitched-gilligans-island.html",
          "urlToImage": "https://lh6.googleusercontent.com/proxy/KFzxKw58S3ltAQNa96T4D-3TGLcrcyN_-srD43dx3OjtmCfC8onASX1ktnNj_zYeGHG84KNXJfClrFyOnsymYKniYhRjrPQssT65YCRaEIc5LCd0BFYHQ0woX5IJ2hTgpOrrFCr-PwxlG47V=w1200-h630-p-k-no-nu",
          "publishedAt": "2021-10-13T19:40:00Z",
          "content": "The Suicide Squad director James Gunn says he once pitched a movie of Gilligan’s Island with a cannibal twist. The original show about a group of castaways becoming stranded on a desert island during… [+3387 chars]"
        },
        {
          "source": {
            "id": "engadget",
            "name": "Engadget"
          },
          "author": "Kris Holt",
          "title": "Blue Origin will fly William Shatner to the edge of space on October 12th",
          "description": "After decades of pretending to explore the universe in TV shows and movies, William Shatner is actually going to space. Blue Origin's second tourist spaceflight is scheduled for October 12th. The Star Trek actor and apparent Twitter verification gatekeeper wi…",
          "url": "https://www.engadget.com/william-shatner-blue-origin-spaceflight-new-shepard-144025171.html",
          "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-10/60ef60f0-251e-11ec-bfff-d018e0a1a7df",
          "publishedAt": "2021-10-04T14:40:25Z",
          "content": "After decades of pretending to explore the universe in TV shows and movies, William Shatner is actually going to space. Blue Origin's second tourist spaceflight is scheduled for October 12th. The Sta… [+1199 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Android Central"
          },
          "author": "Keegan Prosser",
          "title": "Here's the best spooky movies streaming this Halloween",
          "description": "The movies you don't want to miss this Halloween.\n\nWhether you've been celebrating Halloween since October 1 or are just now getting into the spooky spirit, streaming platforms make it easy to pull up and watch your favorite Halloween stories. With that in mi…",
          "url": "https://www.androidcentral.com/these-are-best-spooky-movies-stream-halloween",
          "urlToImage": "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2021/10/hbo-max-halloween.jpg",
          "publishedAt": "2021-10-20T15:30:02Z",
          "content": "Source: HBO Max\r\nWhether you've been celebrating Halloween since October 1 or are just now getting into the spooky spirit, streaming platforms make it easy to pull up and watch your favorite Hallowee… [+6573 chars]"
        },
        {
          "source": {
            "id": "engadget",
            "name": "Engadget"
          },
          "author": "Devindra Hardawar",
          "title": "Sonos Beam (Gen 2) review: A bit of Dolby Atmos makes all the difference",
          "description": "I didn't expect much from the second-generation Sonos Beam. It has the same exact speaker components as the original, a device we already loved. The main difference is that the new Beam also has more processing power to handle Dolby Atmos surround sound. I te…",
          "url": "https://www.engadget.com/sonos-beam-gen-2-review-dolby-atmos-soundbar-130024506.html",
          "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-09/89941f80-21a1-11ec-b16f-f0c9f30ee644",
          "publishedAt": "2021-09-30T13:00:24Z",
          "content": "During the opening chase in Baby Driver, for example, I could hear cars whizzing by my ears, the roar of powerful engines and Jon Spencer Blues Explosion's \"Bellbottoms\" filling my family room. That … [+4186 chars]"
        },
        {
          "source": {
            "id": "engadget",
            "name": "Engadget"
          },
          "author": "Valentina Palladino",
          "title": "The 12.9-inch iPad Pro is $200 off at Amazon right now",
          "description": "We saw the 11-inch iPad Pro go on sale last week, and now Amazon has an even bigger discount on the 12.9-inch model. The 256GB WiFi version is $200 off right now, bringing it down to an all-time low of $999. That's also the same price as the 128GB model, so y…",
          "url": "https://www.engadget.com/apple-129-inch-ipad-pro-is-200-off-at-amazon-right-now-184934830.html",
          "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-05/ac372050-b815-11eb-93ea-03a2f5a79502",
          "publishedAt": "2021-10-20T18:49:34Z",
          "content": "We saw the 11-inch iPad Pro go on sale last week, and now Amazon has an even bigger discount on the 12.9-inch model. The 256GB WiFi version is $200 off right now, bringing it down to an all-time low … [+1171 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNET"
          },
          "author": "Jennifer Bisset",
          "title": "Netflix: 41 best movies to stream this week - CNET",
          "description": "Here's what you should watch this week, from a Shawn Levy-produced horror, to a Turkish police thriller.",
          "url": "https://www.cnet.com/news/netflix-41-best-movies-to-stream-this-week/",
          "urlToImage": "https://www.cnet.com/a/img/CakqreYPIgPxxZg3fA22h92bVjM=/1200x630/2021/10/04/a766a588-0993-41dd-bc30-1561157f5a9f/theres-someone-inside-your-house-00-56-40-06r.jpg",
          "publishedAt": "2021-10-04T23:58:47Z",
          "content": "There's Someone Inside Your House (2021)\r\nNetflix\r\nThis week doesn't see many big blockbuster movies on Netflix, but a couple gems stand out.\r\nOn Thursday, watch Ella Fitzgerald: Just One of Those Th… [+20520 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Gizmodo.com"
          },
          "author": "Germain Lussier",
          "title": "Marvel Considered Guardians of the Galaxy Shorts Prior to Original Movie",
          "description": "Thanks to their appearances in the Marvel Cinematic Universe, the Guardians of the Galaxy are now household names. Today, everyone loves Star-Lord, Drax, Gamora, Rocket Raccoon, and, of course, Groot. Before the first film, though, Marvel Studios had an idea …",
          "url": "https://gizmodo.com/marvel-considered-guardians-of-the-galaxy-shorts-prior-1847933392",
          "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/7f348e5f4adf12964c5a1b1fa8117f88.jpg",
          "publishedAt": "2021-10-26T00:30:00Z",
          "content": "Thanks to their appearances in the Marvel Cinematic Universe, the Guardians of the Galaxy are now household names. Today, everyone loves Star-Lord, Drax, Gamora, Rocket Raccoon, and, of course, Groot… [+2037 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Blogspot.com"
          },
          "author": "noreply@blogger.com (Unknown)",
          "title": "Bryan Andrews & AC Bradley Interview: Marvel's What If...? Season 1 Finale",
          "description": "Warning: SPOILERS for Marvel's What If...? Season 1 Finale - \"What If... The Watcher Broke His Oath?\"Marvel's What If...? season 1 finale brought the heroes across the show's various MCU timelines to stop Ultron (Ross Marquand), who threatened to destroy the …",
          "url": "https://techncruncher.blogspot.com/2021/10/bryan-andrews-ac-bradley-interview.html",
          "urlToImage": "https://lh6.googleusercontent.com/proxy/BrAtQbOV-uNneTbEDY4-W4ooTavaUM7yqTDZOpYTUq0TsgkdTRwub6oDeSbhwc968t6l73okRkRfxD4ABJvJeVgEiEl-4EYav6aR2uHkPBm4iA50BIqWVqfDrCxYlJrQJCkRMlKwCIrgA102Un59okAMLi1iEWFH_UVgbu8Urr8ggQGa-uu7Q8Q=w1200-h630-p-k-no-nu",
          "publishedAt": "2021-10-06T20:21:00Z",
          "content": "Warning: SPOILERS for Marvel's What If...? Season 1 Finale - \"What If... The Watcher Broke His Oath?\"\r\nMarvel's What If...? season 1 finale brought the heroes across the show's various MCU timelines … [+8105 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Gizmodo.com"
          },
          "author": "Germain Lussier",
          "title": "Ahsoka Tano and C-3PO Get the Mash-Up Sculpture You Didn't Know You Needed",
          "description": "On the surface, two Star Wars characters that have no reason to be mashed up are Ahsoka Tano and C-3PO. One is a Togruta, the other is a droid. One is from The Clone Wars cartoon, the other is from the live-action movies. One is gold plated, the other is oran…",
          "url": "https://gizmodo.com/ahsoka-tano-and-c-3po-get-the-mash-up-sculpture-you-did-1847743113",
          "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/186c07674f7caba8e92254026d9fda3d.jpg",
          "publishedAt": "2021-09-27T14:00:00Z",
          "content": "On the surface, two Star Wars characters that have no reason to be mashed up are Ahsoka Tano and C-3PO. One is a Togruta, the other is a droid. One is from The Clone Wars cartoon, the other is from t… [+1681 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Blogspot.com"
          },
          "author": "noreply@blogger.com (Unknown)",
          "title": "Apple TV+ continues streak of big-budget movie deals, lands film starring George Clooney and Brad Pitt",
          "description": "Apple has landed yet another big-budget movie package for its Apple TV+ streaming service. Directed and written by Jon Watts, best known for directing the Spider-Man movies, the as-yet-untitled movie will star George Clooney and Brad Pitt.As reported by Deadl…",
          "url": "https://techncruncher.blogspot.com/2021/09/apple-tv-continues-streak-of-big-budget.html",
          "urlToImage": "https://lh4.googleusercontent.com/proxy/xwPwQ4gfaonFe-zSJC4Y9qqAwRC54DJ3MPWxYwBu7NrWGSSun5u8h8npmFVD6H82VvKsrUpnMxY8RfhFajvkdOq4IfV3da_x602t-YOKBdXkTY3dFHjh1N4askciGVVLztxzvnMG6l7K0ezXSDcN28FspRkXEDRIghzjvjUC2nIwKSts4Q5XxIbfYBY=w1200-h630-p-k-no-nu",
          "publishedAt": "2021-09-30T11:35:00Z",
          "content": "Apple has landed yet another big-budget movie package for its Apple TV+ streaming service. Directed and written by Jon Watts, best known for directing the Spider-Man movies, the as-yet-untitled movie… [+540 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNET"
          },
          "author": "Richard Trenholm",
          "title": "Reebok drops another Ghostbusters sneaker collection, pink slime included - CNET",
          "description": "The ghost-bustin' classic movies and forthcoming sequel Ghostbuster: Afterlife inspire these eye-popping new shoes.",
          "url": "https://www.cnet.com/pictures/reebok-drops-new-ghostbusters-sneaker-collection/",
          "urlToImage": "https://www.cnet.com/a/img/resize/65e739049033d05fdfc665ab808a8a93f14ce3b9/hub/2021/10/01/ee76768a-e481-4b35-9b19-30e7ccef5230/reebok-x-ghostbusters-horizontal-answer-iv-promo.jpg?auto=webp&fit=crop&height=675&width=1200",
          "publishedAt": "2021-10-04T14:00:03Z",
          "content": "Bustin' makes me feel good! Reebok has unveiled a second collection of sneakers inspired by the Ghostbusters movies. A first drop of Ghostbusters Ghost Smashers in October 2020 drew on the classic co… [+905 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Blogspot.com"
          },
          "author": "noreply@blogger.com (Unknown)",
          "title": "5 DCEU Characters Who Would Make Great Roommates (& 5 Who Would Be The Worst)",
          "description": "Though the DC Extended Universe tends to be full of characters secluded and depressed vigilantes, there are actually a surprising amount who do have a fun streak. When it comes to living with any one of them, there'd be some surprising outcomes.RELATED: Batma…",
          "url": "https://techncruncher.blogspot.com/2021/10/5-dceu-characters-who-would-make-great.html",
          "urlToImage": "https://lh6.googleusercontent.com/proxy/_1P_l1jljgorE4XG5xTnPRwRELjYaFAtMiVKmQ861ZxSTH7rDBpcznuEKoy04jGom9k8ZOEAKDI1Nyzxq6Ltu9RRmD_WH1u_2KvTcnsP30hLy3xQ8Deugvm8J4fTjIlrGMz-4MaWPjae6RrUQziZB6vfGSMTCnuLkHEs_zoFSbItcvhAD07Z6ieE-hIMu9_oIy2bVEHMCQQ8yXO09U7U=w1200-h630-p-k-no-nu",
          "publishedAt": "2021-10-04T21:40:00Z",
          "content": "Though the DC Extended Universe tends to be full of characters secluded and depressed vigilantes, there are actually a surprising amount who do have a fun streak. When it comes to living with any one… [+7843 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Gizmodo.com"
          },
          "author": "Rob Bricken",
          "title": "The King’s Man Does a Roll Call of Some Men and a Woman",
          "description": "Have you forgotten who stars in the Kingsmen prequel The King’s Man? I wouldn’t blame you if you had, honestly. The film was originally meant to premiere in the distant prehistory of November 2019—yeah, nearly full two years ago—before getting pushed back to …",
          "url": "https://gizmodo.com/the-king-s-man-does-a-roll-call-of-some-men-and-a-woman-1847919573",
          "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/a4955c2ad5585bce0161f4ffbc1bba6a.jpg",
          "publishedAt": "2021-10-23T00:30:00Z",
          "content": "Have you forgotten who stars in the Kingsmen prequel The Kings Man? I wouldnt blame you if you had, honestly. The film was originally meant to premiere in the distant prehistory of November 2019yeah,… [+1658 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Entrepreneur"
          },
          "author": "Ian Morris",
          "title": "Who Wins in Streaming TV – And Why?",
          "description": "Streaming TV and movies is taking over the media world, but for good reason.",
          "url": "https://www.entrepreneur.com/article/378936",
          "urlToImage": "https://assets.entrepreneur.com/content/3x2/2000/1634328075-shutterstock-1789522520.jpg",
          "publishedAt": "2021-10-17T18:30:00Z",
          "content": "Last Saturday night, my family and I paid $30 to download Marvels Black Widow on its opening weekend.  \r\nAlong with around 2 million other people, we watched a Hollywood blockbuster from the comfort … [+5981 chars]"
        },
        {
          "source": {
            "id": "engadget",
            "name": "Engadget"
          },
          "author": "Kris Holt",
          "title": "Netflix's 'League of Legends' show is getting an immersive IRL event",
          "description": "The animated League of Legends\r\n series Arcane will hit Netflix on November 6th\r\n and Riot Games is marking the launch with an in-person immersive experience connected to the series. The publisher teamed up with Secret Cinema to host the Arcane experience, wh…",
          "url": "https://www.engadget.com/netflix-league-of-legends-arcane-immersive-experience-riot-games-secret-cinema-184323741.html",
          "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-10/f34bb8f0-2b8a-11ec-97ff-8d05da27084f",
          "publishedAt": "2021-10-12T18:43:23Z",
          "content": "The animated League of Legends\r\n series Arcane will hit Netflix on November 6th\r\n and Riot Games is marking the launch with an in-person immersive experience connected to the series. The publisher te… [+1430 chars]"
        },
        {
          "source": {
            "id": "engadget",
            "name": "Engadget"
          },
          "author": "Kris Holt",
          "title": "Netflix's latest mobile games have nothing to do with its shows",
          "description": "Netflix\r\n is expanding its library of mobile games, but they're still only available in a few countries for now. Subscribers in Spain and Italy can now play the Android selection of games, joining members in Poland.While the first couple of games Netflix adde…",
          "url": "https://www.engadget.com/netflix-mobile-games-casual-spain-italy-154522886.html",
          "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-09/3f2dced0-2072-11ec-bdeb-9b6b6bc08511",
          "publishedAt": "2021-09-28T15:45:22Z",
          "content": "Netflix\r\n is expanding its library of mobile games, but they're still only available in a few countries for now. Subscribers in Spain and Italy can now play the Android titles, following an initial r… [+1352 chars]"
        },
        {
          "source": {
            "id": "engadget",
            "name": "Engadget"
          },
          "author": "Cherlynn Low",
          "title": "iOS 15.1 turns on SharePlay for Apple Fitness+",
          "description": "Apple said in September that it was launching a feature called Group Workouts on Fitness+ that would use iOS 15's SharePlay tool for exercise sessions over FaceTime. The company just announced that Group Workouts is available starting today, so you can get up…",
          "url": "https://www.engadget.com/apple-fitness-group-workout-shareplay-available-now-170031703.html",
          "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-10/2bc8f830-35b0-11ec-bfdf-e9e5a2ffc7dd",
          "publishedAt": "2021-10-25T17:00:31Z",
          "content": "Apple said in September that it was launching a feature called Group Workouts on Fitness+ that would use iOS 15's SharePlay tool for exercise sessions over FaceTime. The company just announced that G… [+1654 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Blogspot.com"
          },
          "author": "noreply@blogger.com (Unknown)",
          "title": "Michael Keaton's Batman Returns To The Batcave In The Flash Movie Image",
          "description": "DC's The Flash movie trailer reveals Michael Keaton's Batman return, with the actor donning the Batsuit again in the upcoming movie. Ezra Miller will lead The Flash film as Barry Allen, reprising his DC Extended Universe role in his first solo movie. However,…",
          "url": "https://techncruncher.blogspot.com/2021/10/michael-keatons-batman-returns-to.html",
          "urlToImage": "https://lh5.googleusercontent.com/proxy/G48lPrypAu6deeQJedfBHBwA69eCDSVjD2wZQwzcLHdF0Aah2Ik-jDpUTQKbpVw68jDBUAuuwsb2RmCXpPPi3HWf7vhZDBX0_Ffkk5iJaJMS4_SvyDK6zb8o9DNPbwpYAr-2KyNcb2nfXCFEXm1AuoGbcekWdPHgiL9NKpqYGiZiF4E=w1200-h630-p-k-no-nu",
          "publishedAt": "2021-10-16T21:00:00Z",
          "content": "DC's The Flash movie trailer reveals Michael Keaton's Batman return, with the actor donning the Batsuit again in the upcoming movie. Ezra Miller will lead The Flash film as Barry Allen, reprising his… [+1158 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Blogspot.com"
          },
          "author": "noreply@blogger.com (Unknown)",
          "title": "A Miniseries Is The Best Way To Finish Ridley Scott's Alien Prequel Story",
          "description": "It’s looking less and less likely that Ridley Scott will helm another Alien prequel, but fortunately, Alien: Covenant could still receive a follow-up in the form of a limited series. Despite starting strong, the Alien franchise has struggled to find its feet …",
          "url": "https://techncruncher.blogspot.com/2021/10/a-miniseries-is-best-way-to-finish.html",
          "urlToImage": "https://lh4.googleusercontent.com/proxy/xTWIod3yyRdkI3-6ystGWwff2qJblvvM3X-z-V5zbpkwi_eSTp0F6IGyFBrNa7gAki7KmSh-wFTrxjulgWfpUGIyHdvOkFb3bq6FCVPrsWagW_tbdjS-zA_CC-77czVnP9FqWDAk3jVlTpNX7sEn1VlQhwlnSVJly44ZVXk8iRrlWLeKn2eqfF9vA_PP_G0=w1200-h630-p-k-no-nu",
          "publishedAt": "2021-10-16T19:05:00Z",
          "content": "It’s looking less and less likely that Ridley Scott will helm another Alien prequel, but fortunately, Alien: Covenant could still receive a follow-up in the form of a limited series. Despite starting… [+6009 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Blogspot.com"
          },
          "author": "noreply@blogger.com (Unknown)",
          "title": "DWTS: What Fans Can Expect From The Two-Part Disney Night",
          "description": "Dancing With The Stars season 30 viewers are anticipating the upcoming two-part Disney Night, which is set to air this week. While there are typically numerous different themed nights throughout the duration of a DWTS season, Disney Night is surely the most b…",
          "url": "https://techncruncher.blogspot.com/2021/10/dwts-what-fans-can-expect-from-two-part.html",
          "urlToImage": "https://lh3.googleusercontent.com/proxy/ED6tyH1720zggfr4bN9Kq5W1zVZL0vn9UKU_kFJJv08EcG8LQv_M6RgI2Gt7gKwM6cXPFZ6d4I7lgqE1jIxPd6u0CQB61uWE9qqN5jKZZEPlxg9u3FkCDFC3nruDg3Zwf_0Gf0c4h2fmVz40p-X6o7WJ71Jd_c4Z0fynEC-BD52JlRYPKdyuguf2gjnJQTfuNsmtIAg=w1200-h630-p-k-no-nu",
          "publishedAt": "2021-10-08T19:56:00Z",
          "content": "Dancing With The Stars season 30 viewers are anticipating the upcoming two-part Disney Night, which is set to air this week. While there are typically numerous different themed nights throughout the … [+2704 chars]"
        },
        {
          "source": {
            "id": "polygon",
            "name": "Polygon"
          },
          "author": "Polygon Staff",
          "title": "The most pumpkin spice movies",
          "description": "Fall is finally here, and what better way to celebrate the season than to settle in for a nice movie with a warm drink in hand while wearing your favorite comfy sweater? Polygon celebrates fall by pulling together a list of our favorite pumpkin spice movies!",
          "url": "https://www.polygon.com/22691419/best-fall-movies-pumpkin-spice-films",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/4ntKX6YUmUUTHQC_ocNenlT__rQ=/0x215:3000x1786/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22881861/jbareham_210927_ecl1072_pumpkin_latte_0001.jpg",
          "publishedAt": "2021-09-28T14:34:19Z",
          "content": "If you buy something from a Polygon link, Vox Media may earn a commission. See our ethics statement.Fall is here, and we know what that means: early nights, Ugg boots, warm apple cider, leaf piles, a… [+10617 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Blogspot.com"
          },
          "author": "noreply@blogger.com (Unknown)",
          "title": "The 10 Best Modern Animated Superhero Shows, Ranked By IMDb",
          "description": "There's no question that there are more superhero movies and television shows available today than at any other point in history. While a lot of praise has gone to live-action projects like Loki and The Boys or movies like The Suicide Squad 2 and basically th…",
          "url": "https://techncruncher.blogspot.com/2021/10/the-10-best-modern-animated-superhero.html",
          "urlToImage": "https://lh3.googleusercontent.com/proxy/UPifjJ-w5knvWJAkyaEUIrXMG2r3uC4IS2ZVxTF_gs43v-Rk6p4sgjqSKxjQfjxOEVUrG4NOkghsth_dBigPBmlaFpQaEur3wFyNjp28GgJH1yiMKc-dAcORvhG2ipYoIKiWhoEyAVx2Lo-WYFdfe7tRJ1c=w1200-h630-p-k-no-nu",
          "publishedAt": "2021-10-08T20:39:00Z",
          "content": "There's no question that there are more superhero movies and television shows available today than at any other point in history. While a lot of praise has gone to live-action projects like Loki and … [+7735 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Blogspot.com"
          },
          "author": "noreply@blogger.com (Unknown)",
          "title": "Shang-Chi Passes $400M at Global Box Office Even Without China",
          "description": "Disney and Marvel's Shang-Chi and the Legend of the Ten Rings continues to outperform expectations at the box office, sailing past $400 million worldwide. The Phase 4 MCU movie is in its sixth weekend since its release, which was back on September 3. Shang-Ch…",
          "url": "https://techncruncher.blogspot.com/2021/10/shang-chi-passes-400m-at-global-box.html",
          "urlToImage": "https://lh5.googleusercontent.com/proxy/4LpO6E7p2FvicjgmjC-2Zr3cE7EIJpfSJOA9MnazuQQ46mw_AvOplxHb72GWJKu0KyryzPfPpo_X8gNT9WNlBvdoQ_CNdWSK1ItknVUwYFgYiie-rXDCznKj0iGjtHN0xy5eGcMqGkNTWYhh=w1200-h630-p-k-no-nu",
          "publishedAt": "2021-10-10T20:40:00Z",
          "content": "Disney and Marvel's Shang-Chi and the Legend of the Ten Rings continues to outperform expectations at the box office, sailing past $400 million worldwide. The Phase 4 MCU movie is in its sixth weeken… [+3042 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Blogspot.com"
          },
          "author": "noreply@blogger.com (Unknown)",
          "title": "Final Fantasy Fan Creates Colorful Icons For 35 Series Antagonists",
          "description": "An artist has recently created 35 different colorful icons of villains in the Final Fantasy series. With 15 mainline entries and numerous spinoffs, the series has presented many antagonists throughout the years, and some fans do their best to recreate their f…",
          "url": "https://techncruncher.blogspot.com/2021/10/final-fantasy-fan-creates-colorful.html",
          "urlToImage": "https://lh5.googleusercontent.com/proxy/MDRmWFvCY6jW2wBzKurqp4sZ_LNbIaSMis-nvnfFNKL5JKn62Htadx9oN3AgnzTr1m5k8e4T-7qtBQPPsr-xeDf0LOE_lbXtuEfOpbLKBCDloekusESSao4PIo34f7ejli6uQBWYZtnLtCcZxas2P3wJuNNY-Q=w1200-h630-p-k-no-nu",
          "publishedAt": "2021-10-03T19:46:00Z",
          "content": "An artist has recently created 35 different colorful icons of villains in the Final Fantasy series. With 15 mainline entries and numerous spinoffs, the series has presented many antagonists throughou… [+2673 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Blogspot.com"
          },
          "author": "noreply@blogger.com (Unknown)",
          "title": "Eternals Ticket Sales Beating Black Widow & Shang-Chi",
          "description": "Within just a day of going on sale, the early tickets for Marvel's Eternals have already begun to outpace Black Widow and Shang-Chi and the Legend of the Ten Rings. After being forced to take 2020 off due to the coronavirus pandemic, the MCU has returned in f…",
          "url": "https://techncruncher.blogspot.com/2021/10/eternals-ticket-sales-beating-black.html",
          "urlToImage": "https://lh6.googleusercontent.com/proxy/-KWhEmAxPHnro3IrDX7jym6fjIwN7RZCPw8A7CRQmpeQLEl2qxm_hCEI-xQcvQ3IwrqWzhn7uRLZY2pQHEoSe71LBSebNTn2hcjMtry-9yfBXbR2xRfbwOCk-h0Dg9C3kEs1tShGfsEbZVZJIkchXiv_s2nLQKMPouWH5Vwtfb1w1g=w1200-h630-p-k-no-nu",
          "publishedAt": "2021-10-13T19:26:00Z",
          "content": "Within just a day of going on sale, the early tickets for Marvel's Eternals have already begun to outpace Black Widow and Shang-Chi and the Legend of the Ten Rings. After being forced to take 2020 of… [+2393 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "New York Times"
          },
          "author": "Alyssa Lukpat",
          "title": "One Fatally Shot and One Injured on Set of Alec Baldwin Movie in New Mexico",
          "description": "A woman died and a man was injured after a prop firearm was discharged on the set of “Rust,” a Western, the authorities said.",
          "url": "https://www.nytimes.com/2021/10/21/us/alec-baldwin-shooting-rust-movie.html",
          "urlToImage": "https://static01.nyt.com/images/2021/10/21/multimedia/21xp-newmexico-aerial/21xp-newmexico-aerial-facebookJumbo.jpg",
          "publishedAt": "2021-10-22T02:24:49Z",
          "content": "A woman died and a man was injured in New Mexico on Thursday afternoon after a prop firearm discharged on the set of a movie starring Alec Baldwin, the authorities said.\r\nThe woman and man, both 42, … [+547 chars]"
        }
      ]
    ))
  }, [])

  return (
    <ArticlesList articles={articles} />
  )
}
export default App;