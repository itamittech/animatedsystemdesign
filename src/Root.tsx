import {Composition} from 'remotion';
import {ClientServerDNSProxies} from './topics/ClientServerDNSProxies';
import {LoadBalancingBasics} from './topics/LoadBalancingBasics';
import {LoadBalancingEnhanced} from './topics/LoadBalancingEnhanced';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ClientServerDNSProxies"
        component={ClientServerDNSProxies}
        durationInFrames={3060}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="LoadBalancingBasics"
        component={LoadBalancingBasics}
        durationInFrames={900}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="LoadBalancingEnhanced"
        component={LoadBalancingEnhanced}
        durationInFrames={2580}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
