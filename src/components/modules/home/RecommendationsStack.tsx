import RecommendationCard from '@/components/reusable/atoms/RecommendationCard';

 function RecommendationsGrid() {
  return (
    <div className="md:min-w-[650px] w-full relative shrink-0">
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-wrap gap-[23px] items-center justify-center px-[10px] py-[50px] md:px-[90px] md:py-[100px] w-full box-border">
          <RecommendationCard 
            imageSrc={"/images/home/recommendation1.png"}
            title="Precise Recommendations"
            description="Get clothing suggestions perfectly matched to your unique body shape."
            features={[
              "AI-powered body shape analysis.",
              "Personalized style recommendations.",
              "Real-time fit predictions."
            ]}
          />
          <RecommendationCard 
            imageSrc={"/images/home/recommendation2.png"}
            title="Precise Recommendations"
            description="Get clothing suggestions perfectly matched to your unique body shape."
            features={[
              "AI-powered body shape analysis.",
              "Personalized style recommendations.",
              "Real-time fit predictions."
            ]}
          />
          <RecommendationCard 
            imageSrc={"/images/home/recommendation3.png"}
            title="Precise Recommendations"
            description="Get clothing suggestions perfectly matched to your unique body shape."
            features={[
              "AI-powered body shape analysis.",
              "Personalized style recommendations.",
              "Real-time fit predictions."
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default RecommendationsGrid;
