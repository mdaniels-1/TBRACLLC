'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";
import ServiceCard from "./ServiceCard";

interface Capability {
  title: string;
  image: string;
  details: string[];
}

const capabilities: Capability[] = [
  {
    title: "Architectural & Engineering Services",
    image: "/images/architectural.jpg",
    details: [
      "Architectural Design Concepts",
      "Record As-Built Layouts",
      "Permit & Code Compliance Drawings",
      "Building Renovation Support",
      "Construction Document Preparation",
      "Design Coordination with Structural and MEP Systems"
    ]
  },
  {
    title: "Mechanical, Electrical & Plumbing (MEP) Layout Services",
    image: "/images/mep.jpg",
    details: [
      "HVAC Duct Layouts (Design & Shop Drawings)",
      "HVAC Hydronic Piping Systems",
      "Plumbing and Process Piping Layouts",
      "Electrical Layouts & Coordination",
      "Equipment Installation Coordination Drawings",
      "Trade-Specific Fabrication Shop Drawings"
    ]
  },
  {
    title: "3D/BIM Modeling & Coordination",
    image: "/images/bim.jpg",
    details: [
      "Full 3D Virtual Environment Design",
      "Clash Detection & Resolution",
      "Coordination with Structural & Architectural Systems",
      "Model Integration with Manufacturer Specs and Code Requirements",
      "Revit and AutoCAD MEP-Based Modeling"
    ]
  },
  {
    title: "Core Drilling Management and Structural Coordination",
    image: "/images/cdmsc.jpg",
    details: [
      "Identification of Drill Locations with Structural Team",
      "Coordination of Core Drilling Activities",
      "Review and Integration with MEP Routing",
      "Subcontractor Oversight and Reporting"
    ]
  },
  {
    title: "Construction & Field Support",
    image: "/images/cfs.jpg",
    details: [
      "Field Verification & Point Cloud Integration",
      "Survey & Documentation of Existing Conditions",
      "Construction Phase Coordination",
      "Post-Construction As-Builts and Record Drawings"
    ]
  },
  {
    title: "Project Documentation & Standards",
    image: "/images/pds.jpg",
    details: [
      "Specifications Development",
      "State & Local Code Compliance",
      "Utility Coordination & Permitting Support",
      "Construction Drawing Sets for Fabrication & Installation"
    ]
  },
  {
    title: "Electrical Systems",
    image: "/images/elvs.jpg",
    details: [
      "Electrical Circuit Design & Routing (Lighting, Power)",
      "System Layouts for Smart Building Integration",
      "Coordination with Fire Alarm and Communication Systems"
    ]
  },
  {
    title: "Remote Services & Deliverables",
    image: "/images/rsd.jpg",
    details: [
      "Remote Modeling & Coordination",
      "Site Visit (Add-On) Support for Surveying & Validation",
      "Digital Delivery of Construction Documents & BIM Model"
    ]
  },
];

export default function Services() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll state
  const isAutoScrolling = useRef(true);
  const animationFrameId = useRef<number | null>(null);
  const autoScrollSpeed = 0.5; // pixels per frame
  const pauseDuration = 3000; // ms to pause after user interaction
  
  // Interaction tracking
  const isDragging = useRef(false);
  const hasMoved = useRef(false);
  
  // Pause auto-scroll temporarily
  const pauseAutoScroll = useCallback(() => {
    isAutoScrolling.current = false;
    setTimeout(() => {
      isAutoScrolling.current = true;
    }, pauseDuration);
  }, []);
  
  // Auto-scroll function
  const autoScroll = useCallback(() => {
    if (containerRef.current && isAutoScrolling.current && !isDragging.current) {
      const container = containerRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      if (container.scrollLeft >= maxScroll) {
        // Smoothly loop back to start
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += autoScrollSpeed;
      }
    }
    animationFrameId.current = requestAnimationFrame(autoScroll);
  }, [autoScrollSpeed]);
  
  // Start auto-scroll on mount
  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(autoScroll);
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [autoScroll]);
  
  // Resume auto-scroll when tab becomes visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden && !isDragging.current) {
        isAutoScrolling.current = true;
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);
  
  
  // Handle mouse enter/leave to pause/resume auto-scroll
  const handleMouseEnter = () => {
    isAutoScrolling.current = false;
  };
  
  const handleMouseLeave = () => {
    if (!isDragging.current) {
      pauseAutoScroll();
    }
  };
  
  const handleCardSelect = (index: number) => {
    if (!hasMoved.current) {
      setSelectedIndex(index);
      pauseAutoScroll(); // Pause when user selects a card
    }
    console.log(`Index: ${index}`);
  };
  
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto select-none">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Core Capabilities
      </h2>
      
      <div className="relative mb-10">
        {/* Fade gradients */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />
        
        {/* Carousel container */}
        <motion.div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto overflow-y-hidden scrollbar-hide px-6 cursor-grab active:cursor-grabbing"
          style={{ 
            scrollBehavior: 'auto', // Let our animation handle smoothness
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {capabilities.map((capability, index) => (
            <ServiceCard
              key={`${capability.title}-${index}`}
              title={capability.title}
              image={capability.image}
              isSelected={selectedIndex === index}
              onSelect={() => handleCardSelect(index)}
              className="flex-shrink-0 w-60 min-w-[15rem]"
            />
          ))}
        </motion.div>
      </div>
      
      {/* Selected capability details */}
      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              {capabilities[selectedIndex].title}
            </h3>
            <ul className="space-y-3">
              {capabilities[selectedIndex].details.map((detail, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-3 text-gray-700"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span>{detail}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Auto-scroll indicator */}
      <div className="flex justify-center mt-6">
        <motion.div
          className="px-4 py-2 bg-blue-50 rounded-full text-sm text-blue-600 flex items-center gap-2"
          animate={{ 
            opacity: isAutoScrolling.current ? 1 : 0.5,
            scale: isAutoScrolling.current ? 1 : 0.95
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          Auto-scrolling • Hover or click to pause
        </motion.div>
      </div>
    </div>
  );
}
