import { ApiProperty } from '@nestjs/swagger/dist';
import { IsNotEmpty } from 'class-validator';

export class CreateImageDto {
  @ApiProperty()
  name: string;
  file_name: string;
  @ApiProperty()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  created_by_id: number;
}
