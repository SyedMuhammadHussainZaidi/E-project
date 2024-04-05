const products = [
    {
        title: "AZZAM ROMERO",
        description: "Azzam yacht is renowned for its unparalleled combination of size and sophistication, standing as a testament to luxury with a length of 180 meters, impressive speed capabilities, and opulent interior design."
    },
    {
        title: "GUILLAUME PLISSON",
        description: "Guillaume Plisson yacht stands out for its exquisite design and craftsmanship, embodying elegance and sophistication on the seas, reflecting the artistic vision of its namesake photographer."
    },
    {
        title: "RISING SUN",
        description: "Rising Sun yacht is distinguished by its vast size, luxurious amenities, and sleek design, offering unparalleled comfort and opulence for its elite guests."
    },
    {
        title: "TOPAZ",
        description: "Topaz yacht is renowned for its impressive size, luxurious features, and advanced technology, epitomizing opulence and elegance on the open seas."
    },
    {
        title: "THE LURSSEN",
        description: "Lurssen yachts are distinguished by their impeccable craftsmanship, innovative design, and unparalleled luxury, setting the standard for excellence in the world of superyachts."
    },
    {
        title: "LADY MOURA",
        description: "Lady Moura yacht is celebrated for its iconic presence, featuring a unique sand-covered helipad and a lavish interior, embodying timeless elegance and luxury on the seas."
    }, 
    {
        title: "ECLIPSE",
        description: "Eclipse yacht is renowned for its unmatched privacy and security features, including an anti-paparazzi shield, combined with extravagant amenities, setting the pinnacle of luxury and discretion on the waves."
    }, 
    {
        title: "SUNRAYS",
        description: "Sunrays yacht is distinguished by its sleek exterior design, expansive deck spaces, and luxurious interiors, offering a perfect blend of style and comfort for discerning travelers seeking the ultimate yachting experience."
    }, 
    {
        title: "HERO SAILING YACHT",
        description: "Hero sailing yacht stands out for its graceful lines, cutting-edge technology, and eco-friendly features, offering a harmonious blend of performance and sustainability for an unforgettable sailing experience."
    }, 
    {
        title: "MALTESE FALCON",
        description: "Maltese Falcon is famed for its revolutionary DynaRig system, combining traditional sailing charm with modern engineering, offering unmatched performance and elegance on the high seas."
    }, 
    {
        title: "BLACK PEARL",
        description: "Black Pearl sailing yacht is hailed as a pioneering masterpiece of sustainable yachting, boasting innovative hybrid propulsion, state-of-the-art technology, and unparalleled luxury, setting new standards for eco-conscious maritime travel."
    }, 
    {
        title: "VERTIGO",
        description: "Vertigo sailing yacht is renowned for its sleek design, spacious interiors, and exceptional performance, providing a perfect balance of luxury and adventure for discerning sailors."
    }, 
    {
        title: "WHITE SAIL",
        description: "White sailing yacht is celebrated for its timeless elegance, exceptional craftsmanship, and luxurious amenities, offering a serene and indulgent experience on the open seas."
    }, 
    {
        title: "AQUIJO",
        description: "Aquijo sailing yacht stands out for its remarkable size, innovative design, and dual-mast configuration, providing unparalleled luxury and performance for adventurous voyages across the globe."
    }, 
    {
        title: "ANETTA",
        description: "ANETTA sailing yacht is distinguished by its classic charm, luxurious accommodations, and advanced sailing capabilities, offering a refined and memorable cruising experience on the open waters."
    }, 
    {
        title: "ANETTA 2",
        description: "ANETTA 2 sailing yacht is celebrated for its sleek modern design, spacious interiors, and cutting-edge technology, providing a perfect blend of style and performance for luxurious cruising adventures."
    }, 
    {
        title: "CORNELIA MARIE",
        description: "The Cornelia Marie is renowned for its storied history in the Alaskan crab fishing industry, embodying resilience and adventure on the tumultuous Bering Sea."
    }, 
    {
        title: "THE NORTH WESTERN",
        description:"The Northwestern fishing ship is revered for its legendary presence on the Bering Sea, symbolizing grit, determination, and unparalleled success in the Alaskan crab fishing industry."
    }, 
    {
        title: "BANDIT",
        description: "Time Bandit fishing ship is celebrated for its iconic presence on the Bering Sea, embodying decades of adventure, camaraderie, and hard-earned expertise in the Alaskan crab fishing industry."
    }, 
    {
        title: "ALEUTIAN BALLAD",
        description: "The Aleutian Ballad fishing ship is renowned for its captivating storytelling and educational tours, offering an immersive glimpse into the world of commercial fishing in the unpredictable waters of the Bering Sea."
    },
    {
        title: "HARD MERCHANDISE",
        description: "The Hard Merchandise fishing ship is revered for its relentless pursuit of the elusive bluefin tuna, showcasing the grit and determination of its crew in the competitive world of commercial fishing."
    },
    {
        title: "BERING PROWLER",
        description: "The Bering Prowler fishing ship is known for its rugged durability and unparalleled performance in the harsh conditions of the Bering Sea, embodying resilience and efficiency in the commercial fishing industry."
    },
    {
        title: "ADENIA LK-193",
        description:"Adenia LK 193 fishing ship is celebrated for its cutting-edge technology and sustainable fishing practices, ensuring the conservation of marine resources while maintaining high efficiency in the fishing industry."
    },
    {
        title: "BENARKLE II",
        description: "Benarkle fishing ship is renowned for its versatility and adaptability, equipped to handle various fishing methods and conditions with efficiency and precision in the ever-changing maritime environment."
    },
];
function handleCardClick(imageSrc, title) {
    console.log("Clicked title:", title);

    const modalImage = document.getElementById("modalProductImage");
    const modalDescription = document.getElementById("modalProductDescription");

    const product = products.find(product => {
        console.log("Product title:", product.title);
        return product.title === title;
    });

    modalImage.src = imageSrc;
    modalDescription.innerHTML = product ? product.description : "No description available.";

    const productModal = new bootstrap.Modal(document.getElementById("productModal"));
    productModal.show();
}
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".cardhover");

    cards.forEach((card) => {
        card.addEventListener("click", function () {
            const imageSrc = card.querySelector(".product-image").src;
            let title = card.querySelector(".card-title").textContent;
            let t = document.querySelector('.h1_title');
            t.textContent = title;
            console.log(t)
            handleCardClick(imageSrc, title);
        });
    });  
});