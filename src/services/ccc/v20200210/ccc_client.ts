/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  DescribePSTNActiveSessionListRequest,
  DescribeTelCallInfoResponse,
  SeatUserInfo,
  DescribeTelCdrRequest,
  DescribeTelCdrResponse,
  DescribeIMCdrsResponse,
  DescribeChatMessagesRequest,
  CreateSDKLoginTokenResponse,
  DescribeIMCdrsRequest,
  MessageBody,
  CreateSDKLoginTokenRequest,
  DescribeTelCallInfoRequest,
  CreateStaffResponse,
  TelCdrInfo,
  PSTNSessionInfo,
  CreateStaffRequest,
  DescribeChatMessagesResponse,
  Message,
  DescribePSTNActiveSessionListResponse,
  IMCdrInfo,
} from "./ccc_models"

/**
 * ccc client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("ccc.tencentcloudapi.com", "2020-02-10", clientConfig)
  }

  /**
   * 包括具体聊天内容
   */
  async DescribeChatMessages(
    req: DescribeChatMessagesRequest,
    cb?: (error: string, rep: DescribeChatMessagesResponse) => void
  ): Promise<DescribeChatMessagesResponse> {
    return this.request("DescribeChatMessages", req, cb)
  }

  /**
   * 包括全媒体和文本两种类型
   */
  async DescribeIMCdrs(
    req: DescribeIMCdrsRequest,
    cb?: (error: string, rep: DescribeIMCdrsResponse) => void
  ): Promise<DescribeIMCdrsResponse> {
    return this.request("DescribeIMCdrs", req, cb)
  }

  /**
   * 创建客服账号。
   */
  async CreateStaff(
    req: CreateStaffRequest,
    cb?: (error: string, rep: CreateStaffResponse) => void
  ): Promise<CreateStaffResponse> {
    return this.request("CreateStaff", req, cb)
  }

  /**
   * 创建 SDK 登录 Token。
   */
  async CreateSDKLoginToken(
    req: CreateSDKLoginTokenRequest,
    cb?: (error: string, rep: CreateSDKLoginTokenResponse) => void
  ): Promise<CreateSDKLoginTokenResponse> {
    return this.request("CreateSDKLoginToken", req, cb)
  }

  /**
   * 获取 PSTN 活动会话列表。
   */
  async DescribePSTNActiveSessionList(
    req: DescribePSTNActiveSessionListRequest,
    cb?: (error: string, rep: DescribePSTNActiveSessionListResponse) => void
  ): Promise<DescribePSTNActiveSessionListResponse> {
    return this.request("DescribePSTNActiveSessionList", req, cb)
  }

  /**
   * 按实例获取电话消耗统计
   */
  async DescribeTelCallInfo(
    req: DescribeTelCallInfoRequest,
    cb?: (error: string, rep: DescribeTelCallInfoResponse) => void
  ): Promise<DescribeTelCallInfoResponse> {
    return this.request("DescribeTelCallInfo", req, cb)
  }

  /**
   * 获取电话服务记录与录音
   */
  async DescribeTelCdr(
    req: DescribeTelCdrRequest,
    cb?: (error: string, rep: DescribeTelCdrResponse) => void
  ): Promise<DescribeTelCdrResponse> {
    return this.request("DescribeTelCdr", req, cb)
  }
}
