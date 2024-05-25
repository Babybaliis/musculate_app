/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.24.612 on 2024-05-13 18:39:03.

export interface CreateHierarchyRequest {
    title: string;
    description: string;
    shortDescription: string;
}

export interface ExceptionBody {
    message: string;
    errors: { [index: string]: string };
}

export interface GetFile {
    fileName: string;
    filePath: string;
}

export interface HierarchyBaseResponse {
    id: number;
    title: string;
    description: string;
    shortDescription: string;
}

export interface HierarchyImageBaseResponse extends HierarchyBaseResponse {
    image: GetFile;
}

export interface PageAndSortRequest {
    pageNo: number;
    pageSize: number;
    sortBy: string;
    sortDirection: Direction;
}

export interface PageDto<T> {
    list: T[];
    totalElements: number;
    totalPages: number;
    pageNo: number;
    pageSize: number;
}

export interface UpdateHierarchyRequest {
    title: string;
    description: string;
    shortDescription: string;
}

export interface UploadFile {
    file: MultipartFile;
    filePath: string;
}

export interface CreateImageHierarchyRequest extends CreateHierarchyRequest {
}

export interface UpdateImageHierarchyRequest extends UpdateHierarchyRequest {
}

export interface CreateExerciseHierarchyRequest extends CreateImageHierarchyRequest {
    alert: string[];
    guid: string[];
    muscleGroupId: number;
    tagIds: number[];
}

export interface CreateExerciseWorkoutRequest extends CreateExerciseWorkoutShortRequest {
    workoutId: number;
}

export interface CreateExerciseWorkoutShortRequest {
    order: number;
    exerciseId: number;
}

export interface CreateWorkoutRequest extends CreateWorkoutShortRequest {
    exerciseWorkoutRequestList: CreateExerciseWorkoutShortRequest[];
}

export interface GetAllByMuscleGroupFilter {
    tagIds: number[];
}

export interface CreateWorkoutShortRequest {
    title: string;
    description: string;
    template: boolean;
}

export interface ExerciseHierarchyResponse extends HierarchyImageBaseResponse {
    alert: string[];
    guid: string[];
    muscleGroupId: number;
    tagIds: number[];
}

export interface ExerciseWorkoutResponse extends ExerciseWorkoutShortResponse {
    workout: Workout;
}

export interface ExerciseWorkoutShortResponse {
    id: number;
    order: number;
    exercise: HierarchyBaseResponse;
}

export interface UpdateExerciseHierarchyRequest extends UpdateImageHierarchyRequest {
    alert: string[];
    guid: string[];
    muscleGroupId: number;
    tagIds: number[];
}

export interface WorkoutResponse extends WorkoutShortResponse {
    exerciseWorkoutList: ExerciseWorkoutShortResponse[];
}

export interface WorkoutShortResponse {
    id: number;
    title: string;
    description: string;
    status: string;
    startDate: number;
    endDate: number;
    shareUuid: string;
    template: boolean;
}

export interface CreateProgressExerciseWorkoutRequest {
    order: number;
    weight: number;
    reps: number;
    rest: number;
}

export interface CreateTagHierarchyRequest extends CreateHierarchyRequest {
    category: TagCategoryEnum;
}

export interface UpdateTagHierarchyRequest extends UpdateHierarchyRequest {
    category: TagCategoryEnum;
}

export interface TagHierarchyResponse extends HierarchyBaseResponse {
    category: string;
}

export interface ProgressExerciseWorkoutView {
    id: number;
    weight: number;
    order: number;
    created: number;
    reps: number;
    rest: number;
}

export interface ExerciseWorkoutView {
    id: number;
    workoutId: number;
    order: number;
    exercise: HierarchyBaseResponse;
}

export interface JwtAuthenticationResponse {
    accessToken: string;
    refreshToken: string;
}

export interface TokenRefreshRequest {
    refreshToken: string;
}

export interface SignInRequest {
    username: string;
    password: string;
}

export interface SignUpRequest {
    username: string;
    email: string;
    password: string;
}

export interface UpdateUserRequest {
    email: string;
}

export interface UserView {
    id: number;
    username: string;
    email: string;
    roles: Role[];
    avatarFile: GetFile;
    lastVisitTime: number;
}

export interface MeasurementView {
    weight: number;
    dateTaken: number;
    height: number;
    neck: number;
    chest: number;
    biceps: number;
    forearm: number;
    waist: number;
    userId: number;
    hip: number;
    thigh: number;
    calf: number;
    fat: number;
}

export interface RoleRequest {
    role: Role;
}

export interface CreateMeasurement {
    dateTakenMs: number;
    weight: number;
    height: number;
    neck: number;
    chest: number;
    biceps: number;
    forearm: number;
    waist: number;
    hip: number;
    thigh: number;
    calf: number;
    fat: number;
}

export interface Statistics<T> extends Record {
}

export interface GetExerciseStatisticsRequest extends AbstractGetStatisticsRequest {
    exerciseId: number;
    exerciseStatisticsType: ExerciseStatisticsType;
}

export interface GetMeasurementStatisticsRequest extends AbstractGetStatisticsRequest {
    measurementStatisticsType: MeasurementStatisticsType;
}

export interface MultipartFile extends InputStreamSource {
    name: string;
    bytes: any;
    empty: boolean;
    resource: Resource;
    size: number;
    originalFilename: string;
    contentType: string;
}

export interface Workout extends BaseEntity {
    title: string;
    description: string;
    status: WorkoutStatusEnum;
    startDate: Timestamp;
    endDate: Timestamp;
    shareUuid: string;
    template: boolean;
}

export interface TagCategoryEnum {
    name: string;
    label: string;
    color: string;
}

export interface Record {
}

export interface AbstractGetStatisticsRequest {
    startDate: number;
    endDate: number;
}

export interface Resource extends InputStreamSource {
    open: boolean;
    file: any;
    readable: boolean;
    url: URL;
    description: string;
    uri: URI;
    filename: string;
    contentAsByteArray: any;
}

export interface InputStreamSource {
    inputStream: any;
}

export interface Timestamp extends Date {
}

export interface BaseEntity extends PrimaryEntityKey {
    created: Timestamp;
    lastUpdateDate: Timestamp;
    createBy: number;
}

export interface URL extends Serializable {
}

export interface URI extends Comparable<URI>, Serializable {
}

export interface PrimaryEntityKey extends Serializable, EntityPrimaryType<number> {
    id: number;
}

export interface Serializable {
}

export interface Comparable<T> {
}

export interface EntityPrimaryType<K> {
    id: K;
}

export type Direction = "ASC" | "DESC";

export type Role = "ROLE_USER" | "ROLE_HIERARCHY_WRITE" | "ROLE_HEALTH_READ" | "ROLE_ADD_ROLE";

export type ExerciseStatisticsType = "WEIGHT" | "REPEATS";

export type MeasurementStatisticsType = "WEIGHT" | "HEIGHT";

export type WorkoutStatusEnum = "ACTIVATE" | "DEACTIVATE";