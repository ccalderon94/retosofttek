import { HttpException, Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { HttpClientService } from '@tresdoce-nestjs-toolkit/http-client';
import { config } from '../../config';
import { UtilsService } from '../../utils/services/utils.service';
import { IPaginatedResponse } from '../interfaces';
import { PeopleResponseDto, TranslatePeopleResponseDto } from '../dtos';

@Injectable()
export class StarwarsPeopleService {
  constructor(
    @Inject(config.KEY) private readonly appConfig: ConfigType<typeof config>,
    private readonly utilService: UtilsService,
    private readonly httpClient: HttpClientService,
  ) {}

  async findAll(): Promise<TranslatePeopleResponseDto[]> {
    const { data } = await this.httpClient.get<IPaginatedResponse<PeopleResponseDto>>(
      encodeURI(`${this.appConfig.services.starWarsAPI.url}/people`),
    );
    return data.results.map((row) => this.utilService.mapAndTranslatePeople(row));
  }

  async findOne(id: number): Promise<TranslatePeopleResponseDto> {
    try {
      const { data } = await this.httpClient.get<PeopleResponseDto>(
        encodeURI(`${this.appConfig.services.starWarsAPI.url}/people/${id}`),
      );
      return this.utilService.mapAndTranslatePeople(data);
    } catch (error) {
      throw new HttpException(error.response.data.detail, error.response.status);
    }
  }
}
