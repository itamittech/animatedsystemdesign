import {Composition} from 'remotion';
import {ClientServerDNSProxies} from './topics/ClientServerDNSProxies';
import {LoadBalancingBasics} from './topics/LoadBalancingBasics';
import {LoadBalancingEnhanced} from './topics/LoadBalancingEnhanced';
import {CDNandAPIGateway} from './topics/CDNandAPIGateway';
import {RESTAPIDesign} from './topics/RESTAPIDesign';
import {GraphQLvsREST} from './topics/GraphQLvsREST';
import {gRPCProtocolBuffers} from './topics/gRPCProtocolBuffers';
import {DatabaseFundamentals} from './topics/DatabaseFundamentals';
import {SQLDatabases} from './topics/SQLDatabases';
import {NoSQLDatabases} from './topics/NoSQLDatabases';

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
        durationInFrames={5400}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="RESTAPIDesign"
        component={RESTAPIDesign}
        durationInFrames={3750}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="GraphQLvsREST"
        component={GraphQLvsREST}
        durationInFrames={2700}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="gRPCProtocolBuffers"
        component={gRPCProtocolBuffers}
        durationInFrames={2700}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="DatabaseFundamentals"
        component={DatabaseFundamentals}
        durationInFrames={2100}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="SQLDatabases"
        component={SQLDatabases}
        durationInFrames={2550}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="NoSQLDatabases"
        component={NoSQLDatabases}
        durationInFrames={2700}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
