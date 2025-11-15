import {Composition} from 'remotion';
import {ClientServerDNSProxies} from './topics/ClientServerDNSProxies';
import {LoadBalancingBasics} from './topics/LoadBalancingBasics';
import {LoadBalancingEnhanced} from './topics/LoadBalancingEnhanced';
import {CDNandAPIGateway} from './topics/CDNandAPIGateway';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ClientServerDNSProxies"
        component={ClientServerDNSProxies}
        durationInFrames={3300}
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
      <Composition
        id="CDNandAPIGateway"
        component={CDNandAPIGateway}
        durationInFrames={3600}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
