import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeInstanceOperationsRequest, RestartInstanceResponse, CreateInstanceResponse, DescribeInstanceLogsRequest, UpgradeLicenseRequest, CreateInstanceRequest, DeleteInstanceResponse, DescribeInstancesResponse, DescribeInstanceLogsResponse, UpdatePluginsResponse, RestartInstanceRequest, DescribeInstancesRequest, UpdateInstanceRequest, DescribeInstanceOperationsResponse, RestartNodesRequest, UpdatePluginsRequest, UpgradeLicenseResponse, DeleteInstanceRequest, RestartNodesResponse, UpgradeInstanceResponse, UpdateInstanceResponse, UpgradeInstanceRequest } from "./es_models";
/**
 * es client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询实例指定条件下的操作记录
     */
    DescribeInstanceOperations(req: DescribeInstanceOperationsRequest, cb?: (error: string, rep: DescribeInstanceOperationsResponse) => void): Promise<DescribeInstanceOperationsResponse>;
    /**
     * 查询用户该地域下符合条件的所有实例
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 变更插件列表
     */
    UpdatePlugins(req: UpdatePluginsRequest, cb?: (error: string, rep: UpdatePluginsResponse) => void): Promise<UpdatePluginsResponse>;
    /**
     * 创建指定规格的ES集群实例
     */
    CreateInstance(req: CreateInstanceRequest, cb?: (error: string, rep: CreateInstanceResponse) => void): Promise<CreateInstanceResponse>;
    /**
     * 升级ES集群版本
     */
    UpgradeInstance(req: UpgradeInstanceRequest, cb?: (error: string, rep: UpgradeInstanceResponse) => void): Promise<UpgradeInstanceResponse>;
    /**
     * 升级ES商业特性
     */
    UpgradeLicense(req: UpgradeLicenseRequest, cb?: (error: string, rep: UpgradeLicenseResponse) => void): Promise<UpgradeLicenseResponse>;
    /**
     * 对集群进行节点规格变更，修改实例名称，修改配置，重置密码， 添加Kibana黑白名单等操作。参数中InstanceId为必传参数，ForceRestart为选填参数，剩余参数传递组合及含义如下：
- InstanceName：修改实例名称(仅用于标识实例)
- NodeInfoList: 修改节点配置（节点横向扩缩容，纵向扩缩容，增加主节点，增加冷节点等）
- EsConfig：修改集群配置
- Password：修改默认用户elastic的密码
- EsAcl：修改访问控制列表
- CosBackUp: 设置集群COS自动备份信息
以上参数组合只能传递一种，多传或少传均会导致请求失败
     */
    UpdateInstance(req: UpdateInstanceRequest, cb?: (error: string, rep: UpdateInstanceResponse) => void): Promise<UpdateInstanceResponse>;
    /**
     * 销毁集群实例
     */
    DeleteInstance(req: DeleteInstanceRequest, cb?: (error: string, rep: DeleteInstanceResponse) => void): Promise<DeleteInstanceResponse>;
    /**
     * 重启ES集群实例(用于系统版本更新等操作)
     */
    RestartInstance(req: RestartInstanceRequest, cb?: (error: string, rep: RestartInstanceResponse) => void): Promise<RestartInstanceResponse>;
    /**
     * 用于重启集群节点
     */
    RestartNodes(req: RestartNodesRequest, cb?: (error: string, rep: RestartNodesResponse) => void): Promise<RestartNodesResponse>;
    /**
     * 查询用户该地域下符合条件的ES集群的日志
     */
    DescribeInstanceLogs(req: DescribeInstanceLogsRequest, cb?: (error: string, rep: DescribeInstanceLogsResponse) => void): Promise<DescribeInstanceLogsResponse>;
}
