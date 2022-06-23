import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { JWTGuard } from '../auth/guards/jwt.guard';
import { LabsService } from './labs.service';
@Controller('labs')
export class LabsController {
  constructor(private readonly labsService: LabsService) {}

  @Post()
  create(@Body() data) {
    return this.labsService.create(data);
  }

  @UseGuards(JWTGuard)
  @Get()
  showLabProfile(@Req() req) {
    return this.labsService.profile(req.user.id);
  }

  @UseGuards(JWTGuard)
  @Post('/:lab_id/member')
  addMembers(@Param('lab_id') id, @Body() data) {
    return this.labsService.addMember(id, data);
  }
}
