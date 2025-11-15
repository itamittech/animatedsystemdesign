import {Composition} from 'remotion';
import {LoadBalancingBasics} from './topics/LoadBalancingBasics';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="LoadBalancingBasics"
        component={LoadBalancingBasics}
        durationInFrames={900}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
