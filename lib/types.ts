export interface DimensionCard {
  id: string;
  label: string;
  description: string;
  category: 'value' | 'felt' | 'relational';
  icon: string;
}

export interface Stage1Data {
  values: string[];
  feltSenses: string[];
  relational: string[];
  word: string;
}

export interface RatedDimension {
  id: string;
  label: string;
  category: string;
  score: number; // 0–100, how present in current life
}

export interface Stage2Data {
  ratings: RatedDimension[];
}

export interface Stage3Data {
  homeSelfSummary: string;
  ritualTitle: string;
  ritual: string;
}

export interface AppState {
  currentStage: 1 | 2 | 3;
  stage1: Stage1Data;
  stage2: Stage2Data;
  stage3: Stage3Data | null;
  isLoading: boolean;
  error: string | null;
}
