import {Composition} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';
import {ClientServerDNSProxies} from './topics/ClientServerDNSProxies';
import {ClientServerDNSProxiesVerticalSample} from './topics/ClientServerDNSProxiesVerticalSample';
import {ClientServerDNSProxiesVertical} from './topics/ClientServerDNSProxiesVertical';
import {ClientServerDNSProxiesSquare} from './topics/ClientServerDNSProxiesSquare';
import {LoadBalancingBasics} from './topics/LoadBalancingBasics';
import {LoadBalancingEnhanced} from './topics/LoadBalancingEnhanced';
import {ConsistentHashingCAP} from './topics/ConsistentHashingCAP';
import {CDNandAPIGateway} from './topics/CDNandAPIGateway';
import {RESTAPIDesign} from './topics/RESTAPIDesign';
import {GraphQLvsREST} from './topics/GraphQLvsREST';
import {gRPCProtocolBuffers} from './topics/gRPCProtocolBuffers';
import {DatabaseFundamentals} from './topics/DatabaseFundamentals';
import {SQLDatabases} from './topics/SQLDatabases';
import {NoSQLDatabases} from './topics/NoSQLDatabases';
import {DatabaseReplication} from './topics/DatabaseReplication';
import {DatabaseSharding} from './topics/DatabaseSharding';
import {DistributedTransactions} from './topics/DistributedTransactions';
import {CachingFundamentals} from './topics/CachingFundamentals';
import {MultiLayerCaching} from './topics/MultiLayerCaching';
import {DistributedCaching} from './topics/DistributedCaching';
import {AIMLBasics} from './topics/AIMLBasics';
import {NeuralNetworks} from './topics/NeuralNetworks';
import {LargeLanguageModels} from './topics/LargeLanguageModels';
import {AgenticAI} from './topics/AgenticAI';
import {ModelContextProtocol} from './topics/ModelContextProtocol';
import {AIInAction} from './topics/AIInAction';
import {MonolithVsMicroservices} from './topics/MonolithVsMicroservices';
import {ServiceDecomposition} from './topics/ServiceDecomposition';
import {MicroservicesCommunication} from './topics/MicroservicesCommunication';
import {MicroservicesResilience} from './topics/MicroservicesResilience';
import {DistributedSagas} from './topics/DistributedSagas';
import {ServiceDiscoveryDeployment} from './topics/ServiceDiscoveryDeployment';
import {MicroservicesInAction} from './topics/MicroservicesInAction';
import {MessageQueueFundamentals} from './topics/MessageQueueFundamentals';
import {ApacheKafka} from './topics/ApacheKafka';
import {PublishSubscribePattern} from './topics/PublishSubscribePattern';
import {HorizontalVerticalScaling} from './topics/HorizontalVerticalScaling';
import {RateLimitingThrottling} from './topics/RateLimitingThrottling';
import {AutoScalingStrategies} from './topics/AutoScalingStrategies';
import {FaultToleranceFundamentals} from './topics/FaultToleranceFundamentals';
import {CircuitBreakerPattern} from './topics/CircuitBreakerPattern';
import {RetryBackoffStrategies} from './topics/RetryBackoffStrategies';
import {HealthChecksMonitoring} from './topics/HealthChecksMonitoring';
import {DisasterRecoveryBackup} from './topics/DisasterRecoveryBackup';
import {AuthenticationAuthorization} from './topics/AuthenticationAuthorization';
import {EncryptionSSLTLS} from './topics/EncryptionSSLTLS';
import {APISecurityBestPractices} from './topics/APISecurityBestPractices';
import {DDoSProtectionMitigation} from './topics/DDoSProtectionMitigation';
import {FullTextSearch} from './topics/FullTextSearch';
import {SearchOptimization} from './topics/SearchOptimization';
import {WebSocketRealTimeCommunication} from './topics/WebSocketRealTimeCommunication';
import {LiveStreamingArchitecture} from './topics/LiveStreamingArchitecture';
import {NotificationSystems} from './topics/NotificationSystems';
import {FixProtocol} from './topics/FixProtocol';

const {fontFamily} = loadFont();

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ClientServerDNSProxies"
        component={ClientServerDNSProxies}
        durationInFrames={4080}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="FixProtocol"
        component={FixProtocol}
        durationInFrames={3600}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="ClientServerDNSProxiesVerticalSample"
        component={ClientServerDNSProxiesVerticalSample}
        durationInFrames={480}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="ClientServerDNSProxiesVertical"
        component={ClientServerDNSProxiesVertical}
        durationInFrames={4080}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="ClientServerDNSProxiesSquare"
        component={ClientServerDNSProxiesSquare}
        durationInFrames={4080}
        fps={30}
        width={1080}
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
        durationInFrames={5490}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="ConsistentHashingCAP"
        component={ConsistentHashingCAP}
        durationInFrames={4350}
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
        durationInFrames={3900}
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
      <Composition
        id="DatabaseReplication"
        component={DatabaseReplication}
        durationInFrames={2400}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="DatabaseSharding"
        component={DatabaseSharding}
        durationInFrames={2550}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="DistributedTransactions"
        component={DistributedTransactions}
        durationInFrames={3150}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="CachingFundamentals"
        component={CachingFundamentals}
        durationInFrames={2700}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="MultiLayerCaching"
        component={MultiLayerCaching}
        durationInFrames={3000}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="DistributedCaching"
        component={DistributedCaching}
        durationInFrames={3150}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="AIMLBasics"
        component={AIMLBasics}
        durationInFrames={2700}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="NeuralNetworks"
        component={NeuralNetworks}
        durationInFrames={3000}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="LargeLanguageModels"
        component={LargeLanguageModels}
        durationInFrames={3150}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="AgenticAI"
        component={AgenticAI}
        durationInFrames={3000}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="ModelContextProtocol"
        component={ModelContextProtocol}
        durationInFrames={2850}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="AIInAction"
        component={AIInAction}
        durationInFrames={3600}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="MonolithVsMicroservices"
        component={MonolithVsMicroservices}
        durationInFrames={2700}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="ServiceDecomposition"
        component={ServiceDecomposition}
        durationInFrames={3000}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="MicroservicesCommunication"
        component={MicroservicesCommunication}
        durationInFrames={3000}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="MicroservicesResilience"
        component={MicroservicesResilience}
        durationInFrames={2700}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="DistributedSagas"
        component={DistributedSagas}
        durationInFrames={3000}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="ServiceDiscoveryDeployment"
        component={ServiceDiscoveryDeployment}
        durationInFrames={2700}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="MicroservicesInAction"
        component={MicroservicesInAction}
        durationInFrames={3600}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="MessageQueueFundamentals"
        component={MessageQueueFundamentals}
        durationInFrames={3600}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="ApacheKafka"
        component={ApacheKafka}
        durationInFrames={3600}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="PublishSubscribePattern"
        component={PublishSubscribePattern}
        durationInFrames={2100}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="HorizontalVerticalScaling"
        component={HorizontalVerticalScaling}
        durationInFrames={1950}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="RateLimitingThrottling"
        component={RateLimitingThrottling}
        durationInFrames={2400}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="AutoScalingStrategies"
        component={AutoScalingStrategies}
        durationInFrames={2250}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="FaultToleranceFundamentals"
        component={FaultToleranceFundamentals}
        durationInFrames={2100}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="CircuitBreakerPattern"
        component={CircuitBreakerPattern}
        durationInFrames={2250}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="RetryBackoffStrategies"
        component={RetryBackoffStrategies}
        durationInFrames={2100}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="HealthChecksMonitoring"
        component={HealthChecksMonitoring}
        durationInFrames={2400}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="DisasterRecoveryBackup"
        component={DisasterRecoveryBackup}
        durationInFrames={2550}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="AuthenticationAuthorization"
        component={AuthenticationAuthorization}
        durationInFrames={2550}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="EncryptionSSLTLS"
        component={EncryptionSSLTLS}
        durationInFrames={2400}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="APISecurityBestPractices"
        component={APISecurityBestPractices}
        durationInFrames={2250}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="DDoSProtectionMitigation"
        component={DDoSProtectionMitigation}
        durationInFrames={2100}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="FullTextSearch"
        component={FullTextSearch}
        durationInFrames={2400}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="SearchOptimization"
        component={SearchOptimization}
        durationInFrames={2250}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="WebSocketRealTimeCommunication"
        component={WebSocketRealTimeCommunication}
        durationInFrames={2400}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="LiveStreamingArchitecture"
        component={LiveStreamingArchitecture}
        durationInFrames={2550}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="NotificationSystems"
        component={NotificationSystems}
        durationInFrames={2250}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
