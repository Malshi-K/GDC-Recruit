"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const PageTitle = () => {
  const pathname = usePathname();
  const canvasRef = useRef(null);
  const bubbles = useRef([]);

  // Get title from route path
  const getRouteTitle = () => {
    // Check if path includes caregivers or nurses
    if (pathname.includes("/caregivers")) {
      return "Caregivers";
    } else if (pathname.includes("/nurses")) {
      return "Nurses";
    } else if (pathname.includes("/rate-our-work")) {
      return "Rate Our Work";
    } else if (pathname.includes("/contact")) {
      return "Contact Us";
    }
    // Default fallback or extract from the last segment of the path
    const pathSegments = pathname.split("/").filter(Boolean);
    if (pathSegments.length > 0) {
      // Capitalize the last segment
      const lastSegment = pathSegments[pathSegments.length - 1];
      return lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
    }
  };

  // Get title from route path
  const getRouteSubTitle = () => {
    // Check if path includes caregivers or nurses
    if (pathname.includes("/caregivers")) {
      return "Explore New Opportunities in New Zealand";
    } else if (pathname.includes("/nurses")) {
      return "Explore New Opportunities in New Zealand";
    } else if (pathname.includes("/rate-our-work")) {
      return "Testimonials";
    } 
    // Default fallback or extract from the last segment of the path
    const pathSegments = pathname.split("/").filter(Boolean);
    if (pathSegments.length > 0) {
      // Capitalize the last segment
      const lastSegment = pathSegments[pathSegments.length - 1];
      return lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
    }
  };

  // Dynamically set title based on route
  const title = getRouteTitle();
  const subtitle = getRouteSubTitle();

  // Dynamically set background image based on route (optional)
  const getBackgroundImage = () => {
    if (pathname.includes("/caregivers")) {
      return "/images/caregivers.png";
    } else if (pathname.includes("/nurses")) {
      return "/images/nurses.jpeg";
    } else if (pathname.includes("/rate-our-work")) {
      return "/images/testimonials.jpg";
    } else if (pathname.includes("/contact")) {
      return "/images/testimonials.jpg";
    }
  };

  // Theme colors for bubbles
  const greenColors = [
    "#e6f2e4", // primary-50
    "#000000", // primary-100
    "#1f7e10", // primary-200
    "#19750d", // primary-50
    "#146c0a", // primary-50
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Create bubbles
      createBubbles();
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Create initial bubbles
    function createBubbles() {
      bubbles.current = [];

      // Create 5-8 bubbles with different sizes and positions
      const numBubbles = Math.floor(Math.random() * 4) + 5;

      for (let i = 0; i < numBubbles; i++) {
        const size = Math.random() * 300 + 100; // Random size between 100-400px
        // Choose a random color from the green palette with some transparency
        const colorIndex = Math.floor(Math.random() * greenColors.length);
        // Convert hex to rgba to add transparency
        const hexColor = greenColors[colorIndex];
        // Add some transparency to make bubbles blend better
        const opacity = Math.random() * 0.3 + 0.3; // Random opacity between 0.3 and 0.6

        // Create bubble
        bubbles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: size / 2,
          vx: (Math.random() - 0.5) * 0.5, // Velocity X
          vy: (Math.random() - 0.5) * 0.5, // Velocity Y
          color: hexToRGBA(hexColor, opacity),
        });
      }
    }

    // Helper function to convert hex to rgba
    function hexToRGBA(hex, alpha) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update bubbles
      bubbles.current.forEach((bubble) => {
        // Draw bubble
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fillStyle = bubble.color;
        ctx.fill();

        // Update position
        bubble.x += bubble.vx;
        bubble.y += bubble.vy;

        // Bounce off edges
        if (bubble.x < -bubble.radius) bubble.x = canvas.width + bubble.radius;
        if (bubble.x > canvas.width + bubble.radius) bubble.x = -bubble.radius;
        if (bubble.y < -bubble.radius) bubble.y = canvas.height + bubble.radius;
        if (bubble.y > canvas.height + bubble.radius) bubble.y = -bubble.radius;
      });

      animationFrameId = window.requestAnimationFrame(animate);
    }

    animate();

    // Cleanup
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${getBackgroundImage()})`,
          filter: "brightness(40%)", // Darken the background image
        }}
      />

      {/* Canvas for bubbles animation */}
      <canvas ref={canvasRef} className="absolute inset-0 z-10" />

      {/* Content container */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-white">
        <div className="max-w-4xl text-center">
          {/* Subtitle */}
          <div className="mb-4 inline-block border-b border-t border-primary-50 px-6 py-2 text-sm font-medium tracking-widest">
            {subtitle}
          </div>

          {/* Title - Dynamically set based on route */}
          <h1 className="mb-8 font-sans text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
