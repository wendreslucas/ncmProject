import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NcmDocument = Ncm & Document;

@Schema()
export class Ncm {
  @Prop()
  codigo: string;

  @Prop()
  descricao: string;

  @Prop()
  data_inicio: string;

  @Prop()
  data_fim: string;

  @Prop()
  tipo_ato: string;

  @Prop()
  numero_ato: string;

  @Prop()
  ano_ato: string;
}

export const NcmSchema = SchemaFactory.createForClass(Ncm);
